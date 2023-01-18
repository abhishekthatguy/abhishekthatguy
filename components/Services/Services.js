import React, { useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Carousel from 'react-slick';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Title from '../Title';
import IconTextCard from '../Cards/IconText';
import useStyle from './services-style';
import { ApiContext } from '../../Context/APIContext';

const services = [
  {
    icon: 'ion-ios-code',
    name: 'UI Interface Development',
    desc: 'process of designing and creating user interfaces for software and digital platforms to improve user experience and interface functionality',
  },
  {
    icon: 'ion-ios-code-working',
    name: 'Progressive Web Aapplication development',
    desc: 'Progressive Web Application (PWA) development is the process of creating web applications that are fast, reliable, and provide a native-like experience on mobile devices, allowing for offline access and push notifications. ',
  },
  {
    icon: 'ion-ios-desktop',
    name: 'ERP development ',
    desc: "ERP (Enterprise Resource Planning) development is the process of creating software systems that help manage and integrate a company's core business processes, such as accounting, human resources, procurement, and customer relationship management.",
  },
  {
    icon: 'ion-ios-globe',
    name: 'Website development & hosting',
    desc: 'Website development & hosting is the process of creating and maintaining a website, including designing and coding the site, testing it, and making it available to the public via a web server.',
  },
  {
    icon: 'ion-ios-cog',
    name: 'UI refactoring and upgrading',
    desc: 'UI refactoring is the process of improving the structure and design of the user interface (UI) of an existing application. This can include improving the usability, accessibility, and overall visual design of the application.',
  },
  {
    icon: 'ion-ios-cloudy',
    name: 'Blog setup & development',
    desc: 'Blog setup & development is the process of creating and configuring a blog platform, designing its layout, creating content and publishing it, and promoting it to attract visitors.',
  },
  {
    icon: 'ion-ios-git-compare',
    name: 'CI/Cd setup & Automation',
    desc: 'CI/CD setup & Automation is the process of automating the software development pipeline by integrating building, testing, and deploying code changes to improve speed, quality and reliability of software development.',
  },
  {
    icon: 'ion-logo-github',
    name: 'CMS & 3rd party tools integration',
    desc: "CMS & 3rd party tools integration is the process of integrating a website or application's CMS with external tools to enhance functionality and automate processes. It includes integrating various tools like analytics, CRM, e-commerce platforms and more.",
  },
];

function Services(props) {
  console.log(useContext(ApiContext));
  // const apiUrl = `https://content.abhishek.world/api/website-leads`;
  // const [services, setServices]=useState(data)
  // const [error, setError] = useState(null);
  const classes = useStyle();
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const { t } = props;

  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    if (theme.direction === 'rtl') {
      const lastSlide = Math.floor(services.length - 2);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.highLightText}>
        As a front-end developer, I specialize in designing and implementing
        visually appealing and user-friendly interfaces for websites and web
        applications. My services include:
      </Typography>
      <div className={classes.floatingTitle}>
        <Title>
          <strong>{t('common:profile-landing.services_title')}</strong>
        </Title>
        <Typography className={text.paragraph}>
          {t('common:profile-landing.services_desc')}
        </Typography>
      </div>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <IconButton
            className={clsx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}
          >
            <i className="ion-ios-arrow-back" />
          </IconButton>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={clsx(classes.item, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {services.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <IconTextCard
                  icon={item.icon}
                  text={item.name}
                  desc={item.desc}
                  className={classes.servicesContainer}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={clsx(classes.item, classes.itemPropsLast)}>
                <div />
              </div>
            )}
          </Carousel>
          <IconButton
            className={clsx(classes.nav, classes.next)}
            onClick={() => slider.current.slickNext()}
          >
            <i className="ion-ios-arrow-forward" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

Services.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['profile-landing'])(Services);
