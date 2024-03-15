import React from 'react';
import { Container, Box, TextField, Button, Grid, FormLabel, Typography } from '@mui/material';

const SignupForm = () => {
    return (
        <Container maxWidth="sm" sx={{ marginBottom: "100px", marginTop: "100px" }}>
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
                <Typography component="h1" variant="h5" sx={{paddingBottom:"20px"}}>
                    Signup
                </Typography>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <FormLabel>Username</FormLabel>
                            <TextField fullWidth size='small' label="Username" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormLabel>Email</FormLabel>
                            <TextField fullWidth size='small' label="Email" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormLabel>Mobile</FormLabel>
                            <TextField fullWidth size='small' label="Mobile" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormLabel>Password</FormLabel>
                            <TextField
                                fullWidth size='small'
                                label="Password"
                                type="password"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                                color="primary"
                            >
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default SignupForm;
