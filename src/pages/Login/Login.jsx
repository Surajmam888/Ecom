import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, FormLabel } from '@mui/material';
import { Link } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="sm" sx={{marginBottom:"100px",marginTop:"100px"}}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border:"1px solid black",
          padding:"20px",
          borderRadius:"15px"
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <FormLabel>Username</FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username or Email Address"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormLabel>Password</FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Box sx={{gap:"100px"}}>
          <Link to="/forgotpassword" variant="body2">
            <Button variant="outlined">Forgot password?</Button>
          </Link>
          <Link to="/signupform" variant="body2">
            <Button variant="outlined">SingUp</Button>
          </Link></Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;