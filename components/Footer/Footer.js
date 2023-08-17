import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
// import Link from 'next/link';
import { withTranslation } from '~/i18n';
// import { Image } from '@material-ui/icons';
import logo from '~/public/images/profile-logo.svg';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import useStyles from './footer-style';
import ContactForm from '../Contact/Form';
import SocialMedia from '../SocialMedia/SocialMedia';

function Footer(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="footer">
        <Grid
          container
          spacing={6}
          direction={isMobile ? 'column-reverse' : 'row'}
        >
          <Grid item xs={12} md={5}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
              <Typography variant="h3" className={text.title}>
                {brand.profile.name}
              </Typography>
              <Typography variant="h4" className={text.subtitle}>
                {brand.profile.title}
              </Typography>
            </div>
            <div>
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
            <div className={classes.contact}>
              <Typography className={text.paragraph}>
                {t('common:profile-landing.footer_contact')}
                <br />
                {brand.profile.mobile}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={text.paragraph}>
                {t('common:profile-landing.footer_hello')}
                <br />
                {brand.profile.mail}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={text.paragraph}>
                <br />
                {brand.profile.footerText}
                {new Date().getFullYear()}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['profile-landing'])(Footer);
