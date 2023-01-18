import { makeStyles } from '@material-ui/core/styles';

const cardsStyles = makeStyles((theme) => ({
  socmed: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: `${theme.spacing(4)}px auto`,
    maxWidth: 600,
    '& button': {
      margin: theme.spacing(0, 2),
      width: 36,
      height: 36,
      '& i': {
        color:
          theme.palette.type === 'dark'
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
      },
    },
    '& i': {
      fontSize: 22,
    },
  },
}));

export default cardsStyles;
