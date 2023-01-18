import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import axios from 'axios';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './contact-style';
// import { fetchData } from '../../services/api';
import Error from '../Error';

function Form(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const apiUrl = `https://content.abhishek.world/api/website-leads`;
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(null);
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    // date: new Date(),
  });

  const [openNotif, setNotif] = useState(false);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    setNotif(true);
    // setLoading(true);
    const options = {
      data: { ...values },
    };
    axios
      .post(apiUrl, options)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };

  const handleClose = () => {
    setNotif(false);
  };
  if (error) {
    <Error message={error.message} />;
  }

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className={classes.formWrap}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <Paper className={classes.formBox}>
        <Grid container spacing={6}>
          <Grid item lg={5} xs={12}>
            <Typography
              className={clsx(classes.title, text.title)}
              variant="h3"
            >
              {t('common:profile-landing.contact_title')}
            </Typography>
          </Grid>
          <Grid item lg={7} xs={12}>
            <div className={classes.form}>
              <ValidatorForm
                onSubmit={handleSubmit}
                onError={(errors) => console.log(errors)}
              >
                <TextValidator
                  className={classes.input}
                  label={t('common:profile-landing.form_name')}
                  onChange={handleChange('name')}
                  name="Name"
                  value={values.name}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
                <TextValidator
                  className={classes.input}
                  label={t('common:profile-landing.form_email')}
                  onChange={handleChange('email')}
                  name="Email"
                  value={values.email}
                  validators={['required', 'isEmail']}
                  errorMessages={[
                    'this field is required',
                    'email is not valid',
                  ]}
                />
                <TextValidator
                  multiline
                  rows="6"
                  className={classes.input}
                  label={t('common:profile-landing.form_message')}
                  onChange={handleChange('message')}
                  name="Message"
                  value={values.message}
                />
                <div className={classes.btnArea}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    size="large"
                  >
                    {t('common:profile-landing.form_send')}
                  </Button>
                </div>
              </ValidatorForm>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

Form.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['profile-landing'])(Form);
