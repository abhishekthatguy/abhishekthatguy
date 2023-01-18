import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './timeline-style';
import brand from '~/public/text/brand';
import specialization from '~/public/text/skills-expertise';
import Section from '../Section/Section';

function Timeline(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();

  const { t } = props;

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [play, setPlay] = useState(false);

  const handlePlay = (visible) => {
    if (visible.inViewport) {
      setTimeout(() => {
        setPlay(true);
      }, 500);
    }
  };

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            <Hidden mdDown>
              <Typography variant="h2" className={classes.nameDeco}>
                {brand.profile.name}
              </Typography>
            </Hidden>
          </Grid>
          <Grid item container spacing={3} md={12} lg={10}>
            <Grid item xs={12}>
              <div className={classes.history}>
                <ul>
                  <li>
                    <Section />
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item md={5} sm={6} xs={12}>
              <div className={classes.history}>
                <Typography
                  variant="h5"
                  className={clsx(classes.title, text.subtitle)}
                >
                  {t('common:profile-landing.timeline_experience')}
                </Typography>
                <ul>
                  {/* <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      delay={200}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Creative Director</Typography>
                        <Typography gutterBottom>at Fourth Company</Typography>
                        <Typography className={classes.time}>2015 - Present</Typography>
                       
                      </div>
                    </ScrollAnimation>
                  </li> */}
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={100}
                      delay={300}
                      duration={0.3}
                    >
                      <div>
                        <Typography
                          variant="h3"
                          gutterBottom
                          className={text.subtitle2}
                        >
                          Senior Software Developer
                        </Typography>
                        <Typography gutterBottom>at Policy Advisor</Typography>
                        <Typography className={classes.time}>
                          Nov 2021 - present
                        </Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={200}
                      delay={400}
                      duration={0.3}
                    >
                      <div>
                        <Typography
                          variant="h3"
                          gutterBottom
                          className={text.subtitle2}
                        >
                          Front End Developer
                        </Typography>
                        <Typography gutterBottom>at Accenture </Typography>
                        <Typography className={classes.time}>
                          Feb 2021 - Oct 2021
                        </Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={300}
                      delay={500}
                      duration={0.3}
                    >
                      <div>
                        <Typography
                          variant="h3"
                          gutterBottom
                          className={text.subtitle2}
                        >
                          Web Developer
                        </Typography>
                        <Typography gutterBottom>
                          at NKC Projects Pvt Ltd{' '}
                        </Typography>
                        <Typography className={classes.time}>
                          Dec 2017 -Jan 2020
                        </Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                </ul>
              </div>
              {specialization &&
                specialization.technicalSkills.map((item) => (
                  <div className={classes.history} key={`item-${item.title}`}>
                    <Typography
                      variant="h5"
                      className={clsx(classes.title, text.subtitle)}
                    >
                      {/* {t('common:profile-landing.timeline_experience')} */}
                      {item.title}
                    </Typography>
                    <ul>
                      {item &&
                        item.skills.map((skill) => (
                          <li key={`item-${item}-${skill.title}`}>
                            <ScrollAnimation
                              animateOnce
                              animateIn="fadeInLeftShort"
                              delay={200}
                              duration={0.3}
                            >
                              <div>
                                <Typography
                                  variant="h3"
                                  gutterBottom
                                  className={text.subtitle2}
                                >
                                  {skill.title}
                                </Typography>
                                {skill &&
                                  skill.skillList.map((x) => (
                                    <Button key={x.name}>{x.title} </Button>
                                  ))}
                              </div>
                            </ScrollAnimation>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.progress}>
                <Typography
                  variant="h5"
                  className={clsx(classes.title, text.subtitle)}
                >
                  {t('common:profile-landing.timeline_skill')}
                </Typography>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeIn"
                  delay={400}
                  duration={0.3}
                  afterAnimatedIn={handlePlay}
                >
                  <ul>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-code" />
                        <Typography variant="h6" className={text.subtitle2}>
                          Website & Web Application Development
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-desktop" />
                        <Typography variant="h6" className={text.subtitle2}>
                          ERP Development
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 90 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-phone-landscape" />
                        <Typography variant="h6" className={text.subtitle2}>
                          Responisive User Interface Development
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 90 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-laptop" />
                        <Typography variant="h6" className={text.subtitle2}>
                          Prototype and Wire Frame Development
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 60 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-globe" />
                        <Typography variant="h6" className={text.subtitle2}>
                          Cross Browser Compatabile Website Development{' '}
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 90 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-cloudy" />
                        <Typography variant="h6" className={text.subtitle2}>
                          Cloud Based Application Deployment & Maintainance
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-infinite" />
                        <Typography variant="h6" className={text.subtitle2}>
                          CI & CD Integration
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-settings" />
                        <Typography variant="h6" className={text.subtitle2}>
                          3rd party tools & libraries integration
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar,
                        }}
                      />
                    </li>
                  </ul>
                </ScrollAnimation>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Timeline.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['profile-landing'])(Timeline);
