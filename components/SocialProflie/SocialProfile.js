import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'next/link';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { withTranslation } from '~/i18n';
import brand from '~/public/text/brand';
// import { useText } from '~/theme/common';
import useStyles from './social-profile-style';

function SocialProfile() {
  const classes = useStyles();
  // const text = useText();
  // const { img, title, desc, t } = props;

  return (
    <Grid item xs={12}>
      <div className={classes.socmed}>
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
      </div>
      {/* ended here */}
    </Grid>
  );
}

// SocialProfile.propTypes = {
//   img: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
//   t: PropTypes.func.isRequired,
// };

export default withTranslation(['profile-landing'])(SocialProfile);
