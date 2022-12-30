import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Carousel from 'react-slick';
import clsx from 'clsx';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import ImageThumbCard from '../Cards/ImageThumb';
import Title from '../Title';
import useStyle from './gallery-style';

const portfolio = [
  {
    img: imgAPI.portfolio[6],
    title: 'Policyadvisor Broker Flow',
    link: 'https://www.policyadvisor.com/app/select-product/.com',
    size: 'long',
    category: 'cat1',
  },
  {
    img: imgAPI.portfolio[0],
    title: 'Policy advisor website refactoring and enhancement',
    link: 'https://policyadvisor.com/.com',
    size: 'long',
    category: 'website-development',
  },
  {
    img: imgAPI.portfolio[4],
    title: 'Nygss- Automation suit',
    link: 'https://nyggs.com/nyggs/',
    size: 'short',
    category: 'erp',
  },
  {
    img: imgAPI.portfolio[7],
    title: 'Roost',
    link: '#',
    size: 'short',
    category: 'cat1',
  },
  {
    img: imgAPI.portfolio[2],
    title: 'Watsoo express website enhancement',
    link: 'https://www.watsooexpress.com/.com',
    size: 'short',
    category: 'website-development',
  },
  {
    img: imgAPI.portfolio[5],
    title: 'Nygss Store',
    link: 'https://store.nkcproject.com/',
    size: 'short',
    category: 'erp',
  },
  {
    img: imgAPI.portfolio[10],
    title: 'Nygss Billing',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'erp',
  },
  {
    img: imgAPI.portfolio[9],
    title: 'Myorderbooks',
    link: 'myorderbooks.com',
    size: 'short',
    category: 'cat1',
  },
  {
    img: imgAPI.portfolio[3],
    title: 'GS1 website development project ',
    link: 'https://globalsoft1.com/.com',
    size: 'short',
    category: 'website-development',
  },
  {
    img: imgAPI.portfolio[1],
    title: 'Accredo,UI refactoring and enhancement',
    link: 'https://www.accredo.com/.com',
    size: 'long',
    category: 'website-development',
  },
  {
    img: imgAPI.portfolio[8],
    title: 'Nygss HRMS',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'erp',
  },
];

function Gallery(props) {
  const classes = useStyle();
  const { t } = props;
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(true);
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    setData(portfolio);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false,
  };

  const filterChildren = (name) => {
    if (name !== 'all') {
      const filteredData = portfolio.filter((item) => item.category === name);
      setData(filteredData);
      setFilter(name);
    } else {
      setData(portfolio);
      setFilter('all');
    }

    setLoaded(false);
    setTimeout(() => {
      setLoaded(true);
    }, 700);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Title>
          {t('common:profile-landing.gallery_title')}
          <strong>{t('common:profile-landing.gallery_titleBold')}</strong>
        </Title>
        <div className={classes.filter}>
          <Button
            onClick={() => filterChildren('all')}
            className={filter === 'all' ? classes.selected : ''}
          >
            All
          </Button>
          <Button
            onClick={() => filterChildren('cat1')}
            className={filter === 'cat1' ? classes.selected : ''}
          >
            Web Application & software
          </Button>
          <Button
            onClick={() => filterChildren('website-development')}
            className={filter === 'website-development' ? classes.selected : ''}
          >
            Website enhancement & development
          </Button>
          <Button
            onClick={() => filterChildren('erp')}
            className={filter === 'erp' ? classes.selected : ''}
          >
            ERP and Automation suite development
          </Button>
          <Button
            onClick={() => filterChildren('cat4')}
            className={filter === 'cat4' ? classes.selected : ''}
          >
            Blog & tools integration
          </Button>
          {/* <Button
            onClick={() => filterChildren('cat5')}
            className={filter === 'cat5' ? classes.selected : ''}
          >
            Category 5
          </Button> */}
        </div>
        <Hidden xsDown>
          <div className={classes.massonry}>
            {data.map((item, index) => (
              <div
                className={clsx(classes.item, isLoaded && classes.loaded)}
                key={index.toString()}
                style={{ transitionDuration: index / 4 + 's' }}
              >
                <ImageThumbCard
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  size={item.size}
                />
              </div>
            ))}
          </div>
          {data.length < 1 && (
            <Typography variant="button" component="p" align="center">
              {t('common:profile-landing.gallery_nodata')}
            </Typography>
          )}
        </Hidden>
        <Hidden smUp>
          <Carousel {...settings}>
            {data.map((item, index) => (
              <div className={classes.itemCarousel} key={index.toString()}>
                <ImageThumbCard
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  size={item.size}
                />
              </div>
            ))}
          </Carousel>
        </Hidden>
      </Container>
    </div>
  );
}

Gallery.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['profile-landing'])(Gallery);
