import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Card, CardMedia, Grid } from '@material-ui/core';
import Header from '../components/Header';
import Notification from '../components/Notification';
import brand from '../public/text/brand';
import { Link, withTranslation } from '../i18n';

const sectionMargin = (margin) => margin * 20;
const useStyles = makeStyles((theme) => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background:
      theme.palette.type === 'dark'
        ? theme.palette.background.default
        : theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
  },
  spaceTop: {
    paddingTop: sectionMargin(theme.spacing()),
  },
  containerWrap: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(9),
    '& > section': {
      position: 'relative',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  card: {
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1, 0),
  },
  media: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      borderTop: '8px solid #000',
      borderBottom: '8px solid #000',
      padding: 0,
    },
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: '14px',
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(1),
    [theme.breakpoints.down('')]: {
      padding: theme.spacing(1, 5, 0),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 3, 0),
    },
  },
  countDays: {
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 3),
    },
  },
}));

const YOUTUBE_PLAYLISTS_ITEM_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';
export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLISTS_ITEM_API}?part=snippet&playlistId=PLzT9p9zdveKa-ddF7I4B4Yi2cNOZIYDRy&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`,
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

function YouTubePage(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir, data } = props;
  console.log('youtube data', data);
  // console.log("API Key:", process.env.YOUTUBE_API_KEY);

  return (
    <React.Fragment>
      <Head>
        <title>
          {brand.profile.name}
          &nbsp; - Youtube page
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} invert />
        <main className={classes.containerWrap}>
          <section>
            <Typography variant="h3" align="center" gutterBottom>
              My playList
              {/* {t('common:profile-landing.header_youtube')} */}
            </Typography>

            <div className={classes.root}>
              <Grid container spacing={2}>
                {data.items
                  .filter(
                    (item) =>
                      !item.snippet.title
                        .toLowerCase()
                        .includes('private video'),
                  )
                  .map((item, index) => {
                    const publishedDate = new Date(item?.snippet?.publishedAt);
                    const currentDate = new Date();
                    const timeDifference = currentDate - publishedDate;
                    const daysAgo = Math.floor(
                      timeDifference / (1000 * 60 * 60 * 24),
                    );
                    return (
                      <Grid
                        className={classes.cardWrapper}
                        item
                        key={index.toString()}
                        xs={12}
                        sm={6}
                        md={3}
                      >
                        <Card className={classes.card}>
                          <CardMedia className={classes.media}>
                            <Link
                              href={`https://www.youtube.com/watch?v=${item?.snippet?.resourceId?.videoId}`}
                            >
                              <img
                                width={item?.snippet?.thumbnails?.medium?.width}
                                height={
                                  item?.snippet?.thumbnails?.medium?.height
                                }
                                src={item?.snippet?.thumbnails?.medium?.url}
                                alt={item?.snippet?.title}
                              />
                            </Link>
                          </CardMedia>

                          <Typography
                            className={classes.cardText}
                            variant="body2"
                          >
                            {item?.snippet?.title}
                          </Typography>
                          <Typography
                            className={classes.countDays}
                            variant="caption"
                          >
                            {daysAgo === 1
                              ? '1 day ago'
                              : daysAgo === 0
                              ? 'Today'
                              : `${daysAgo} days ago`}
                          </Typography>
                        </Card>
                      </Grid>
                    );
                  })}
              </Grid>
            </div>
          </section>
        </main>
        <Notification />
      </div>
    </React.Fragment>
  );
}

YouTubePage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  //   t: PropTypes.func.isRequired,
  data: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        snippet: PropTypes.shape({
          title: PropTypes.string.isRequired,
          resourceId: PropTypes.shape({
            videoId: PropTypes.string.isRequired,
          }).isRequired,
          thumbnails: PropTypes.shape({
            high: PropTypes.shape({
              width: PropTypes.number.isRequired,
              height: PropTypes.number.isRequired,
              url: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

// YouTubePage.getInitialProps = async () => ({
//     namespacesRequired: ['common'],
// });

export default withTranslation('common')(YouTubePage);
