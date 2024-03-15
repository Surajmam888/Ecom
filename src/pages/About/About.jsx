import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import service from "../../assets/services.png"
import { Container } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ marginTop: '100px', marginBottom:"100px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <img src={service} alt="About Us" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} sm={6} sx={{alignItems:"center",marginTop:"50px"}}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor auctor mauris consectetur, eu lacinia justo congue.
          </Typography>
          <Typography variant="body1" paragraph>
            Etiam sit amet ante sit amet turpis fermentum tempor. Duis in dui non arcu tempor luctus.
          </Typography>
          <Button variant="outlined" color="primary">
            View More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
