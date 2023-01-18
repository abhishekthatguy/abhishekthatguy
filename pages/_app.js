import React, { useState, useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import {
  ThemeProvider,
  createTheme,
  StylesProvider,
  jssPreset,
} from '@material-ui/core/styles';
import { create } from 'jss';
import { PageTransition } from 'next-page-transitions';
import rtl from 'jss-rtl';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoadingBar from 'react-top-loading-bar';
// import axios from 'axios';
import { i18n, appWithTranslation } from '../i18n';
import appTheme from '../theme/appTheme';
// import Error from './_error';
import { ApiContext } from '../Context/APIContext';

/* import css vendors */
import '~/vendors/hamburger-menu.css';
import 'animate.css/animate.css';
import '../vendors/top-loading-bar.css';
import '../vendors/animate-extends.css';
import '../vendors/page-transition.css';
import '../vendors/slick/slick.css';
import '../vendors/slick/slick-theme.css';

let themeType = 'light';
if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function MyApp(props) {
  const [loading, setLoading] = useState(0);
  // const [data, setData] = useState(null);
  // const [dataFetching, setDataFetching] = useState(false);
  // const [error, setError] = useState(null);
  const [theme, setTheme] = useState({
    ...appTheme('violet', themeType),
    direction: i18n.language === 'ara' ? 'rtl' : 'ltr',
  });

  useEffect(() => {
    // Set layout direction
    document.dir = i18n.language === 'ara' ? 'rtl' : 'ltr';

    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    }

    // Remove loading bar
    setLoading(0);
    setTimeout(() => {
      setLoading(100);
    }, 2000);

    // Refresh JSS in SSR
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  // fetch API data
  // const fetchData1 = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.get('http://localhost:1337/api/profile');
  //     console.log(res.data);
  //     if (res && res?.data) setData(res.data);
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  useEffect(() => {
    // fetchData1();
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem(
      'luxiTheme',
      theme.palette.type === 'light' ? 'dark' : 'light',
    );
    setTheme({
      ...appTheme('violet', newPaletteType),
      direction: theme.direction,
    });
  };

  const toggleDirection = (dir) => {
    document.dir = dir;
    setTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette,
      },
    });
  };

  const muiTheme = createTheme(theme);
  const { Component, pageProps, router } = props; // eslint-disable-line
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  // if (error) {
  //   return <Error message={error.message} />;
  // }
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <LoadingBar
            height={0}
            color={theme.palette.primary.light}
            progress={loading}
            className="top-loading-bar"
          />
          <div id="main-wrap">
            <PageTransition timeout={300} classNames="page-fade-transition">
              <ApiContext.Provider value="data-context">
                <Component
                  {...pageProps}
                  onToggleDark={toggleDarkTheme}
                  onToggleDir={toggleDirection}
                  key={router.route}
                />
              </ApiContext.Provider>
            </PageTransition>
          </div>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
