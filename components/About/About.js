import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import brand from '~/public/text/brand';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './about-style';
import SocialMedia from '../SocialMedia/SocialMedia';

function About(props) {
  const theme = useTheme();
  const classes = useStyles();
  const text = useText();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = props;
  const [showMore, setShowMore] = useState(false);
  return (
    <div className={classes.root}>
      <Container maxWidth={isMobile ? 'sm' : 'lg'}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12} />
          <Grid item lg={9} xs={12}>
            <div className={classes.about}>
              <div className={classes.reward}>
                <div className={classes.item}>
                  <Typography variant="h5" className={text.subtitle}>
                    {brand.profile.aboutusTitle}
                  </Typography>
                  <Typography component="p" className={text.paragraph}>
                    {brand.profile.aboutusParagraph}
                    <Button
                      variant="outlined-rounded"
                      color="primary"
                      onClick={() => {
                        setShowMore(!showMore);
                      }}
                      className={classes.button}
                    >
                      {!showMore ? 'Read more' : 'Read less'}
                    </Button>
                  </Typography>
                </div>
              </div>

              <Hidden mdUp>
                {/* <div className={classes.socmed}>
                  <IconButton
                    aria-label="Delete"
                    className={classes.margin}
                    size="small"
                  >
                    <i className="ion-logo-facebook" />
                  </IconButton>
                  <IconButton
                    aria-label="Delete"
                    className={classes.margin}
                    size="small"
                  >
                    <i className="ion-logo-twitter" />
                  </IconButton>
                  <IconButton
                    aria-label="Delete"
                    className={classes.margin}
                    size="small"
                  >
                    <i className="ion-logo-google" />
                  </IconButton>
                  <IconButton
                    aria-label="Delete"
                    className={classes.margin}
                    size="small"
                  >
                    <i className="ion-logo-linkedin" />
                  </IconButton>
                </div> */}
                <SocialMedia color="purple" />
                <Typography className={classes.ban_desc} variant="h5">
                  {t('common:profile-landing.banner_desc')}
                </Typography>
              </Hidden>
              <Paper className={classes.photo}>
                <figure>
                  <img src={brand.profile.avatar} alt="avatar" />
                </figure>
                <span className={classes.frame} />
              </Paper>
            </div>
            <div className={classes.line} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

About.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['profile-landing'])(About);
