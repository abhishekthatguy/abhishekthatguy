import { makeStyles, alpha } from '@material-ui/core/styles';

const socmedStyles = makeStyles((theme) => ({
  socmed: {
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1),
    },
    '& button': {
      marginRight: theme.spacing(4),
      color: theme.palette.primary.dark,
      width: 36,
      height: 36,
      '& i': {
        color: alpha(theme.palette.common.white, 0.75),
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
    '& i': {
      fontSize: 24,
    },
  },
}));
export default socmedStyles;
