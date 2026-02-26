import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid, Typography, Button } from '@material-ui/core';
import { withTranslation } from '~/i18n';
import SwiperSlider from './SwiperSlider';
import useStyles from './slider-style';
import imgAPI from '~/public/images/imgAPI';
const places = [
  {
    id: 1,
    name: 'Kashmir',
    image: imgAPI.slider[1],
    backgroundImage: imgAPI.slider[0],
    info: 'Undoubtedly it is a great sign of natural beauty surrounded by hills and stones. For its natural beauty, it has become a popular tourist center in Bangladesh.',
  },
  {
    id: 2,
    name: 'Switzerland',
    image: imgAPI.slider[2],
    backgroundImage: imgAPI.slider[1],
    info: 'Undoubtedly it is a great sign of natural beauty surrounded by hills and stones. For its natural beauty, it has become a popular tourist center in Bangladesh.',
  },
  {
    id: 3,
    name: 'Italy',
    image: imgAPI.slider[3],
    backgroundImage: imgAPI.slider[2],
    info: 'Undoubtedly it is a great sign of natural beauty surrounded by hills and stones. For its natural beauty, it has become a popular tourist center in Bangladesh.',
  },
  {
    id: 4,
    name: 'Istambul',
    image: imgAPI.slider[4],
    backgroundImage: imgAPI.slider[3],
    info: 'Undoubtedly it is a great sign of natural beauty surrounded by hills and stones. For its natural beauty, it has become a popular tourist center in Bangladesh.',
  },
  {
    id: 5,
    name: 'Prague',
    image: imgAPI.slider[5],
    backgroundImage: imgAPI.slider[4],
    info: 'Undoubtedly it is a great sign of natural beauty surrounded by hills and stones. For its natural beauty, it has become a popular tourist center in Bangladesh.',
  },
  {
    id: 6,
    name: 'Belgium',
    image: imgAPI.slider[0],
    backgroundImage: imgAPI.slider[5],
    info: 'Undoubtedly it is a great sign of natural beauty surrounded by hills and stones. For its natural beauty, it has become a popular tourist center in Bangladesh.',
  },
];

function SliderHome() {
  const classes = useStyles();
  const [place, setPlace] = useState(null);
  return (
    <div
      className="sliderHome"
      style={{
        backgroundImage: `url("${
          place?.backgroundImage || '/public/images/Rectangle 1.png'
        }")`,
        height: '115vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Grid className={classes.swiperWraper} container>
        <Grid item xs={12} md={4} className={classes.infoContainer}>
          <Typography variant="h5" className={classes.infoTitle}>
            {place?.name}
          </Typography>
          <Typography variant="body1" className={classes.infoText}>
            {place?.info}
          </Typography>
          <Button
            className={classes.pageBtn}
            variant="contained"
            color="primary"
            size="large"
          >
            Discuss &nbsp; Location
          </Button>
        </Grid>
        <Grid item xs={12} md={7}>
          <SwiperSlider place={place} setPlace={setPlace} places={places} />
        </Grid>
      </Grid>
    </div>
  );
}

// SliderHome.propTypes = {
//   t: PropTypes.func.isRequired,
//   place: PropTypes.object,
//   setPlace: PropTypes.func.isRequired,
// };

export default withTranslation(['profile-landing'])(SliderHome);
