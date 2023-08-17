import { makeStyles } from '@material-ui/core/styles';

const socmedStyles = makeStyles((theme) => ({
  // socmed: {
  //   marginBottom: theme.spacing(3),
  //   marginLeft: theme.spacing(0),
  //   [theme.breakpoints.down('sm')]: {
  //     margin: theme.spacing(3, 0, 0, 3),
  //   },
  //   '& button': {
  //     // border: '2px solid',
  //     marginRight: theme.spacing(4),
  //     color: theme.palette.primary.dark,
  //     width: 36,
  //     height: 36,
  //     '& i': {
  //       color: alpha(theme.palette.common.white, 0.75),
  //     },
  //     [theme.breakpoints.down('sm')]: {
  //       '& i': {
  //         marginBottom: theme.spacing(1),

  //         color:
  //           theme.palette.type === 'dark'
  //             ? theme.palette.primary.light
  //             : theme.palette.primary.dark,
  //       },
  //     },
  //   },
  //   '& i': {
  //     fontSize: 24,
  //   },
  // },
  socmed: {
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0, 0, 3),
    },
    '& button': {
      marginRight: theme.spacing(4),
      width: 36,
      height: 36,
      '& i': {
        fontSize: 24,
      },
      [theme.breakpoints.down('sm')]: {
        '& i': {
          marginBottom: theme.spacing(1),
          color:
            theme.palette.type === 'dark'
              ? theme.palette.primary.light
              : theme.palette.primary.dark,
        },
      },
    },
  },
}));
export default socmedStyles;
