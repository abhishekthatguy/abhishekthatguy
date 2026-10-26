import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
    position: 'relative',
    '& > div': {
      [theme.breakpoints.down('md')]: {
        padding: 0,
      },
    },
  },
  props: {
    width: 500,
    height: 500,
    '&:focus': {
      outline: 'none',
    },
  },
  highLightText: {
    textAlign: 'center',
    padding: theme.spacing(2, 2),
    width: '50%',
    margin: '0px auto 10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '0  auto 25px',
    },
  },
  servicePara: {
    marginTop: theme.spacing(18),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3),
    },
  },
  floatingTitle: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: theme.spacing(8),
      top: theme.spacing(8),
      width: 240,
    },
  },
  carousel: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
    },
  },
  servicesContainer: {},
  item: {
    padding: theme.spacing(0, 1),
    marginBottom: theme.spacing(),
    '&:focus': {
      outline: 'none',
    },
  },
  nav: {
    position: 'absolute',
    top: '45%',
    width: 36,
    height: 36,
    padding: 0,
    minWidth: 0,
    background: theme.palette.background.default,
    border: 'none',
    boxShadow: 'none',
    zIndex: 3,
    transform: `scale(2.5) ${
      theme.direction === 'rtl' ? 'rotate(180deg)' : 'rotate(0deg)'
    }`,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    '& i': {
      transform: 'scale(1.2)',
      color:
        theme.palette.type === 'dark'
          ? theme.palette.divider
          : theme.palette.text.primary,
    },
  },
  prev: {
    left: 6,
  },
  next: {
    right: 6,
  },
  itemPropsFirst: {
    '& div': {
      width: theme.direction === 'rtl' ? 400 : 350,
      [theme.breakpoints.down(1500)]: {
        width: theme.direction === 'rtl' ? 500 : 300,
      },
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  itemPropsLast: {
    width: theme.direction === 'rtl' ? 350 : 400,
    '& div': {
      [theme.breakpoints.down(1500)]: {
        width: theme.direction === 'rtl' ? 300 : 500,
      },
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

export default testiStyles;
