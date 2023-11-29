import { makeStyles } from '@material-ui/core/styles';
const gold = '#311b92';
const black = '#000000';

const aboutStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    '& > div': {
      [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
    },
  },
  about: {
    display: 'flex',
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      '& > h5': {
        fontSize: 18,
        lineHeight: '28px',
        // marginTop: theme.spacing(0),
      },
    },
  },
  about2: {
    display: 'flex',
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      '& > h5': {
        fontSize: 18,
        lineHeight: '28px',
        marginTop: theme.spacing(7),
      },
    },
  },
  line: {
    borderTop: 0,
    borderLeft: 0,
    height: 60,
    width: 'calc(100% - 130px)',
    border: '2px solid',
    borderImageSource: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    borderImageSlice: 1,
    position: 'relative',
    marginTop: '-30px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  line2: {
    borderTop: 0,
    borderLeft: 0,
    height: 100,
    width: 'calc(100% - 130px)',
    border: '2px solid',
    borderImageSource: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    borderImageSlice: 1,
    position: 'relative',
    marginTop: '0px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    transform: 'translateX(-7.5%)',
  },
  lineReverse: {
    borderTop: 0,
    borderLeft: 0,
    height: 40,
    width: 'calc(100% - 130px)',
    border: '2px solid',
    borderImageSource: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    borderImageSlice: 1,
    position: 'relative',
    marginRight: -30,
    marginTop: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    transform: 'rotateX(180deg) translateX(-7.5%)',
  },
  reward: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0.5, 7, 0, 0),
    },
    [theme.breakpoints.down('xs')]: {
      overflow: 'auto',
    },
  },
  item: {
    textAlign: 'left',
    color: gold,
    margin: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    '& figure': {
      height: 70,
      margin: theme.spacing(0, 0, 2),
      [theme.breakpoints.down('sm')]: {
        height: 50,
      },
      '& img': {
        height: '100%',
      },
    },
    '& p': {
      fontFamily: 'Times New Roman',
      color: black,
      fontSize: 20,
      lineHeight: 1.5,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    '& h5': {
      fontWeight: theme.typography.fontWeightMedium,
      textTransform: 'uppercase',
      color: theme.primary,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
  },
  photo: {
    position: 'relative',
    // marginTop: -105,
    background: theme.palette.common.white,
    width: 270,
    height: 345,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      width: 200,
      minHeight: 200,
      height: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      margin: '20px auto',
    },
    '& figure': {
      margin: 0,
      '& img': {
        width: '100%',
        minHeight: '100%',
      },
    },
  },
  photoReverse: {
    position: 'relative',
    marginTop: 0,
    background: theme.palette.common.white,
    width: 270,
    height: 345,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      width: 200,
      minHeight: 200,
      height: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      margin: '20px auto',
    },
    '& figure': {
      margin: 0,
      '& img': {
        width: '100%',
        minHeight: '100%',
      },
    },
  },
  frame: {
    position: 'absolute',
    width: '90%',
    left: '5%',
    top: theme.spacing(2),
    height: '105%',
    border: '2px solid',
    borderImageSource: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    borderImageSlice: 1,
    zIndex: 10,
  },
  // socmed: {
  //   display: 'flex',
  //   justifyContent: 'space-evenly',
  //   margin: `${theme.spacing(4)}px auto`,
  //   maxWidth: 600,
  //   '& button': {
  //     margin: theme.spacing(0, 2),
  //     width: 36,
  //     height: 36,
  //     '& i': {
  //       color:
  //         theme.palette.type === 'dark'
  //           ? theme.palette.primary.light
  //           : theme.palette.primary.dark,
  //     },
  //   },
  //   '& i': {
  //     fontSize: 22,
  //   },
  // },
}));

export default aboutStyles;
