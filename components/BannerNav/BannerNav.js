import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import Link from 'next/link';
import SideNavigation from '../SideNavigation';
// import SocialProfile from '../SocialProflie/SocialProfile';
// import { Image } from '@material-ui/icons';
import brand from '~/public/text/brand';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Settings from '../Settings';
import useStyles from './banner-style';
import SocialMedia from '../SocialMedia/SocialMedia';

function BannerNav(props) {
  const theme = useTheme();
  const text = useText();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = props;
  const { onToggleDark, onToggleDir } = props;

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            <Hidden mdDown>
              <SideNavigation />
            </Hidden>
          </Grid>
          <Grid item lg={10} xs={12}>
            <div className={classes.banner}>
              <div className={classes.cover}>
                <div className={classes.figure}>
                  <Image layout="fill" src={brand.profile.cover} alt="cover" />
                  <div className={classes.overlay} />
                </div>
              </div>
              <Hidden mdDown>
                <div className={classes.settingIcon}>
                  <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
                </div>
              </Hidden>
              <div className={classes.text}>
                <Typography variant="h4" className={text.title2}>
                  {t('common:profile-landing.banner_greeting')},
                </Typography>
                <Typography variant="h2" className={text.title}>
                  {t('common:profile-landing.banner_me')}
                  &nbsp;Abhishek,
                </Typography>
                <Typography variant="h4" className={text.title2}>
                  Sr. software developer,
                </Typography>
                <Hidden smDown>
                  <Typography variant="h5" className={text.subtitle2}>
                    {t('common:profile-landing.banner_desc')}
                  </Typography>
                  <SocialMedia color="white" />
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
                    <Link
                      href={brand?.socialProfile?.instagram}
                      target="_blank"
                    >
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
                  {/* <SocialProfile /> */}
                </Hidden>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

BannerNav.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation(['profile-landing'])(BannerNav);
