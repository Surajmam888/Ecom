import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Container, Typography } from '@mui/material';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission here
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '100px', marginBottom: "100px" }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: "1px solid black",
          padding: "20px",
          borderRadius: "15px"
        }}
      >
        <Box sx={{ textAlign: "center", padding: "20px" }}>
          <Typography variant="h4">Contact Page</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Email"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};


export default Contact