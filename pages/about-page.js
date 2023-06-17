import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Notification from '../components/Notification';
import brand from '../public/text/brand';
import { withTranslation } from '../i18n';

const sectionMargin = (margin) => margin * 20;

const useStyles = makeStyles((theme) => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background:
      theme.palette.type === 'dark'
        ? theme.palette.background.default
        : theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
  },
  spaceTop: {
    paddingTop: sectionMargin(theme.spacing()),
  },
  sectionScroll: {
    width: '100vw',
    height: '100vh',
  },
  containerWrap: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(4),
    '& > section': {
      position: 'relative',
    },
  },
}));

function AboutPage(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir, t } = props;

  return (
    <React.Fragment>
      <Head>
        <title>
          {brand.profile.name}
          &nbsp; - About page
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} invert />
        <main className={classes.containerWrap}>
          <section
            className={clsx(
              classes.spaceTop,
              classes.spaceBottom,
              classes.sectionScroll,
            )}
            style={{ backgroundColor: '#f5f5f5' }}
          >
            <Typography variant="h2" align="center" gutterBottom>
              About Page
            </Typography>
            <Typography variant="h2" align="center" gutterBottom>
              {t('common:title')}
            </Typography>
            <Typography variant="h4" align="center">
              {t('common:subtitle')}
            </Typography>
          </section>
          <section className={clsx(classes.spaceTop, classes.spaceBottom)}>
            <Typography variant="h2" align="center" gutterBottom>
              About Page
            </Typography>
            ;
            <Typography variant="h2" align="center" gutterBottom>
              {t('common:title')}
            </Typography>
            <Typography variant="h4" align="center">
              {t('common:subtitle')}
            </Typography>
          </section>
        </main>
        <Notification />
      </div>
    </React.Fragment>
  );
}

AboutPage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

AboutPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(AboutPage);
