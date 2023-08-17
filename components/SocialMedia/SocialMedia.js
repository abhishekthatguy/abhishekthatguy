import React from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@material-ui/core/styles';
// import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
// import Link from 'next/link';
import brand from '~/public/text/brand';
import { withTranslation } from '~/i18n';
import useStyles from './socmed-styles';

function SocialMedia({ color }) {
  const theme = useTheme();
  const classes = useStyles();
  const getIconColor = () => {
    if (color === 'purple') {
      return theme.palette.type === 'dark'
        ? theme.palette.primary.dark // Dark theme
        : theme.palette.common.white; // Light theme
    }
    return alpha(theme.palette.common.white, 0.75); // Other color on both themes
  };

  return (
    <div className={classes.socmed}>
      <a rel="noopener noreferrer" target="_blank" href={brand?.socialProfile?.facebook}>
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <i style={{ color: getIconColor() }} className="ion-logo-facebook" />
        </IconButton>
      </a>
      <a rel="noopener noreferrer" href={brand?.socialProfile?.instagram} target="_blank">
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <i style={{ color: getIconColor() }} className="ion-logo-instagram" />
        </IconButton>
      </a>
      <a rel="noopener noreferrer" href={brand?.socialProfile?.twitter} target="_blank">
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <i style={{ color: getIconColor() }} className="ion-logo-twitter" />
        </IconButton>
      </a>
      <a rel="noopener noreferrer" href={brand?.socialProfile?.linkedin} target="_blank">
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <i style={{ color: getIconColor() }} className="ion-logo-linkedin" />
        </IconButton>
      </a>
      <a rel="noopener noreferrer" href={brand?.socialProfile?.youtube} target="_blank">
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <i style={{ color: getIconColor() }} className="ion-logo-youtube" />
        </IconButton>
      </a>
      <a rel="noopener noreferrer" href={brand?.socialProfile?.github} target="_blank">
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <i style={{ color: getIconColor() }} className="ion-logo-github" />
        </IconButton>
      </a>
      <a rel="noopener noreferrer" href={brand?.socialProfile?.skype} target="_blank">
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <i style={{ color: getIconColor() }} className="ion-logo-skype" />
        </IconButton>
      </a>
    </div>
  );
}

SocialMedia.propTypes = {
  // t: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default withTranslation(['profile-landing'])(SocialMedia);
