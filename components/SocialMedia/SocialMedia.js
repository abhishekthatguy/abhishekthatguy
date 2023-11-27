import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, alpha } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link';
import brand from '~/public/text/brand';
import { withTranslation } from '~/i18n';
import useStyles from './socmed-styles';

function SocialMedia(props) {
  const theme = useTheme();
  const classes = useStyles();
  const { color } = props;

  return (
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
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <i
            style={{
              color:
                color === 'purple'
                  ? theme.palette.primary.dark
                  : alpha(theme.palette.common.white, 0.75),
            }}
            className="ion-logo-instagram"
          />
        </IconButton>
      </Link>
      <Link href={brand?.socialProfile?.twitter} target="_blank">
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <i
            style={{
              color:
                color === 'purple'
                  ? theme.palette.primary.dark
                  : alpha(theme.palette.common.white, 0.75),
            }}
            className="ion-logo-twitter"
          />
        </IconButton>
      </Link>
      <Link href={brand?.socialProfile?.linkedin} target="_blank">
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <i
            style={{
              color:
                color === 'purple'
                  ? theme.palette.primary.dark
                  : alpha(theme.palette.common.white, 0.75),
            }}
            className="ion-logo-linkedin"
          />
        </IconButton>
      </Link>
      <Link href={brand?.socialProfile?.youtube} target="_blank">
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <i
            style={{
              color:
                color === 'purple'
                  ? theme.palette.primary.dark
                  : alpha(theme.palette.common.white, 0.75),
            }}
            className="ion-logo-youtube"
          />
        </IconButton>
      </Link>
      <Link href={brand?.socialProfile?.github} target="_blank">
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <i
            style={{
              color:
                color === 'purple'
                  ? theme.palette.primary.dark
                  : alpha(theme.palette.common.white, 0.75),
            }}
            className="ion-logo-github"
          />
        </IconButton>
      </Link>
      <Link href={brand?.socialProfile?.skype} target="_blank">
        <IconButton aria-label="Delete" className={classes.margin} size="small">
          <i
            style={{
              color:
                color === 'purple'
                  ? theme.palette.primary.dark
                  : alpha(theme.palette.common.white, 0.75),
            }}
            className="ion-logo-skype"
          />
        </IconButton>
      </Link>
    </div>
  );
}

SocialMedia.propTypes = {
  // onToggleDark: PropTypes.func.isRequired,
  // onToggleDir: PropTypes.func.isRequired,
  // t: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default withTranslation(['profile-landing'])(SocialMedia);
