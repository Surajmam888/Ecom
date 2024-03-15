import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Grid, FormLabel } from '@mui/material';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can send email for password reset here
    setMessage(`An email with instructions to reset your password has been sent to ${email}.`);
  };

  return (
    <Container maxWidth="sm" sx={{ marginBottom: "100px", marginTop: "100px" }}>
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: "1px solid black",
        padding: "20px",
        borderRadius: "15px"
      }}>
        <Box elevation={3}>
          <Typography component="h1" variant="h5" sx={{textAlign:"center", paddingBottom:"20px"}}>
            Forgot Password
          </Typography>
          {/* <Typography>
            Please Enter Your Email
          </Typography> */}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <FormLabel sx={{textAlign:"left"}}>Please Enter Your Email</FormLabel>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Grid>
              <Grid item xs={6}>
              <Link to="/login">
                <Button fullWidth variant="outlined" color="primary">
                  Back
                </Button>
              </Link>
              </Grid>
              <Grid item xs={6}>
                <Button type="submit" fullWidth variant="outlined" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
          {message && (
            <Typography variant="body1" color="textSecondary" style={{ marginTop: '1rem' }}>
              {message}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
