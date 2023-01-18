import React from 'react';
// import PropTypes from 'prop-types';
// import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './section-style';

function SectionColored() {
  const classes = useStyles();
  const text = useText();
  // const { t } = props;
  // const [play, setPlay] = useState(false);

  // const countup = (val, isPlay) => (
  //   <span>{isPlay ? <CountUp end={val} /> : 0}</span>
  // );

  const handlePlay = (visible) => {
    if (visible.inViewport) {
      setTimeout(() => {
        // setPlay(true);
      }, 500);
    }
  };

  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={classes.root}
          spacing={6}
        >
          <Grid md={12} item>
            <ScrollAnimation
              animateOnce
              animateIn="fadeIn"
              offset={-300}
              afterAnimatedIn={handlePlay}
            >
              <div className={classes.counterItem}>
                <Typography variant="h6" className={text.subtitle2}>
                  {/* {t('common:profile-landing.counter_completed')} */}I am
                  thrilled that you have taken the time to visit my personal
                  website. It is my sincere hope that you have found the
                  information contained here informative and engaging. Should
                  you have any questions or wish to discuss potential
                  collaboration opportunities, please do not hesitate to reach
                  out to me. I would be more than happy to hear from you and
                  explore how we can work together.
                </Typography>
                <div className={classes.text}>
                  {/* <i className="ion-ios-briefcase-outline" /> */}
                  <Typography variant="h4" className={text.title2}>
                    {/* {countup(30, play)} */}Thank you again for stopping by!
                  </Typography>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
          {/* <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <i className="ion-ios-time-outline" />
                <Typography variant="h4" className={text.title2}>
                  {countup(4567, play)}
                </Typography>
              </div>
              <Typography variant="h6" className={text.subtitle2}>
                {t('common:profile-landing.counter_hour')}
              </Typography>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <i className="ion-ios-heart-outline" />
                <Typography variant="h4" className={text.title2}>
                  {countup(10, play)}
                </Typography>
              </div>
              <Typography variant="h6" className={text.subtitle2}>
                {t('common:profile-landing.counter_happy')}
              </Typography>
            </div>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}

// SectionColored.propTypes = {
//   t: PropTypes.func.isRequired,
// };

export default withTranslation(['profile-landing'])(SectionColored);
