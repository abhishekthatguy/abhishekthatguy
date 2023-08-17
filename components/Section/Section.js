import React from 'react';
// import PropTypes from 'prop-types';
import Image from 'next/image';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-scroll-animation-wrapper';
// import Link from 'next/link';
// import { Image } from '@material-ui/icons';
import brand from '~/public/text/brand';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './section-style';
import SocialMedia from '../SocialMedia/SocialMedia';

function Section() {
  const theme = useTheme();
  const classes = useStyles();
  const text = useText();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  //   const [showMore, setShowMore] = useState(false);
  return (
    <div className={classes.root}>
      <Container maxWidth={isMobile ? 'sm' : 'lg'}>
        <Grid container spacing={0}>
          {/* extra inf div */}
          <Grid item lg={4} xs={12}>
            <Paper className={classes.photoReverse}>
              <figure>
                <Image
                  layout="fill"
                  src={brand.profile.avatar3}
                  alt="avatar2"
                />
              </figure>
              <span className={classes.frame} />
            </Paper>
          </Grid>
          <Grid item lg={7} xs={12}>
            <div className={classes.about2}>
              <div className={classes.reward}>
                <div className={classes.item}>
                  <Typography variant="h5" className={text.subtitle}>
                    {brand.profile.aboutusTitle1}
                  </Typography>
                  <Typography component="p" className={text.paragraph}>
                    {brand.profile.aboutusParagraph1}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} xs={12}>
            {/* asic information */}
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              delay={200}
              duration={0.3}
            >
              <div className={classes.about2}>
                <div className={classes.reward}>
                  <div className={classes.item}>
                    <Typography
                      variant="h3"
                      gutterBottom
                      className={text.subtitle2}
                    >
                      Basic Information
                    </Typography>
                    <Typography gutterBottom component="p">
                      Name :{brand.profile.name}
                    </Typography>
                    <Typography gutterBottom component="p">
                      Designation :{brand.profile.title}
                    </Typography>
                    <Typography gutterBottom component="p">
                      Email :{brand.profile.mail}
                    </Typography>
                    <Typography gutterBottom component="p">
                      Phone :{brand.profile.mobile}
                    </Typography>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item lg={7} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              delay={200}
              duration={0.3}
            >
              <div className={classes.about2}>
                <div className={classes.reward}>
                  <div className={classes.item}>
                    <Typography
                      component="p"
                      className={classes.aboutusDescription}
                    >
                      {brand.profile.aboutusDescription1}
                    </Typography>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInLeftShort"
            delay={200}
            duration={0.3}
          >
            <Grid item xs={12}>
              <div className={classes.socmedSpace}>
                <SocialMedia color="purple" />
              </div>
              {/* <SocialMedia color="purple" /> */}
              {/* <div className={classes.socmed}>
                <Link href={brand?.socialProfile?.facebook} target="_blank">
                  <IconButton
                    aria-label="Delete"
                    className={classes.margin}
                    size="small"
                    link
                  >
                    <i className="ion-logo-facebook" />
                  </IconButton>
                </Link>
                <Link href={brand?.socialProfile?.instagram} target="_blank">
                  <IconButton
                    aria-label="Delete"
                    className={classes.margin}
                    size="small"
                  >
                    <i className="ion-logo-instagram" />
                  </IconButton>
                </Link>
                <Link href={brand?.socialProfile?.twitter} target="_blank">
                  <IconButton
                    aria-label="Delete"
                    className={classes.margin}
                    size="small"
                  >
                    <i className="ion-logo-twitter" />
                  </IconButton>
                </Link>
                <Link href={brand?.socialProfile?.linkedin} target="_blank">
                  <IconButton
                    aria-label="Delete"
                    className={classes.margin}
                    size="small"
                  >
                    <i className="ion-logo-linkedin" />
                  </IconButton>
                </Link>
                <Link href={brand?.socialProfile?.youtube} target="_blank">
                  <IconButton
                    aria-label="Delete"
                    className={classes.margin}
                    size="small"
                  >
                    <i className="ion-logo-youtube" />
                  </IconButton>
                </Link>
                <Link href={brand?.socialProfile?.github} target="_blank">
                  <IconButton
                    aria-label="Delete"
                    className={classes.margin}
                    size="small"
                  >
                    <i className="ion-logo-github" />
                  </IconButton>
                </Link>
                <Link href={brand?.socialProfile?.skype} target="_blank">
                  <IconButton
                    aria-label="Delete"
                    className={classes.margin}
                    size="small"
                  >
                    <i className="ion-logo-skype" />
                  </IconButton>
                </Link>
              </div> */}
              {/* ended here */}
            </Grid>
          </ScrollAnimation>
          <div className={classes.lineReverse} />
          <Grid item lg={7} xs={12}>
            <div className={classes.about}>
              <div className={classes.reward}>
                <div className={classes.item}>
                  <Typography variant="h5" className={text.subtitle}>
                    {brand.profile.aboutusTitle2}
                  </Typography>
                  <Typography component="p" className={text.paragraph}>
                    {brand.profile.aboutusParagraph2}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Paper className={classes.photo}>
              <figure>
                <img src={brand.profile.avatar2} alt="avatar2" />
              </figure>
              <span className={classes.frame} />
            </Paper>
          </Grid>
          <Grid item lg={12} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              delay={200}
              duration={0.3}
            >
              <div className={classes.about}>
                <div className={classes.reward}>
                  <div className={classes.item}>
                    <Typography
                      component="p"
                      className={classes.aboutusDescription}
                    >
                      {brand.profile.aboutusDescription2}
                    </Typography>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item lg={12} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              delay={200}
              duration={0.3}
            >
              <div className={classes.about}>
                <div className={classes.reward}>
                  <div className={classes.item}>
                    <Typography
                      component="p"
                      className={classes.aboutusDescription}
                    >
                      {brand.profile.hobbiesParagraph}
                    </Typography>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item lg={7} xs={12}>
            <div className={classes.about}>
              <div className={classes.reward}>
                <div className={classes.item}>
                  {/* <Typography variant="h5" className={text.subtitle}>
                    {brand.profile.hobbies}
                  </Typography> */}
                  <Typography component="p" className={text.paragraph}>
                    {brand.profile.hobbiesDescription}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Paper className={classes.photo}>
              <figure>
                <Image
                  layout="fill"
                  src={brand.profile.avatar4}
                  alt="avatar2"
                />
              </figure>
              <span className={classes.frame} />
            </Paper>
          </Grid>
          <div className={classes.line2} />
        </Grid>
      </Container>
    </div>
  );
}

export default withTranslation(['profile-landing'])(Section);
