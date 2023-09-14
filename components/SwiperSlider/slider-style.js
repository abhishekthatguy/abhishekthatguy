import { makeStyles } from '@material-ui/core/styles';

const sliderStyles = makeStyles((theme) => ({
  swiperWraper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
    },
  },
  pageBtn: {
    margin: theme.spacing(0, 0, 3),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(3, 0, 0),
    },
  },
  swiperContainer: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '82vh',
    [theme.breakpoints.down('sm')]: {
      height: '58vh',
    },
  },
  swiperSlide: {
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease-in-out',
    transitionDelay: '0.3s',
    height: '100%',
    // zIndex: 200,
    [theme.breakpoints.down('sm')]: {
      height: '58vh',
    },
  },
  slideImage: {
    width: '100%',
    height: '72vh',
    maxWidth: '100%',
    borderRadius: '10px !important',
    zIndex: 1000,
    objectFit: 'cover',
    opacity: 1,
    [theme.breakpoints.down('sm')]: {
      height: '58vh',
    },
  },
  slideInfo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    padding: theme.spacing(2),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: theme.spacing(1),
  },
  infoContainer: {
    marginLeft: '40px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: '20px',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  infoTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  infoText: {
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
  },
  customNavigation: {
    position: 'absolute',
    bottom: '58px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  navigationButton: {
    background: 'transparent',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '0px',
    margin: ' 10px',
    transition: 'background-color 0.3s ease-in-out',
    border: '3px solid #fff',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.4)',
    },
  },
}));
export default sliderStyles;
