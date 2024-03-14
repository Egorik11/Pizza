import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../components/Button/Button';
import { loginSchema } from '../loginSchema/loginSchema';

import {
  Checkbox,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const Login = () => {
  const [priority, setPriority] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: { firstName: '', numberPhone: '', address: '' },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset();
  };

  const handleChange = () => {
    setPriority(!priority);
  };

  return (
    <Container maxWidth='sm'>
      <Typography textAlign={'center'} variant='h4' gutterBottom>
        Sign in
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name='firstName'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label='Name'
                  {...field}
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName.message : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name='numberPhone'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label='Phone number'
                  {...field}
                  error={!!errors.numberPhone}
                  helperText={
                    errors.numberPhone ? errors.numberPhone.message : ''
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name='address'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label='Address'
                  {...field}
                  error={!!errors.address}
                  helperText={errors.address ? errors.address.message : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' color='primary'>
              Submit
            </Button>
          </Grid>
          <Grid sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox value={priority} onChange={handleChange} />
            <label>Allow data processing?</label>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
