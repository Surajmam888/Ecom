import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import product5 from "../../assets/Productimage/product5.jpg";
import product4 from "../../assets/Productimage/product4.jpg";
import product2 from "../../assets/Productimage/product3.jpg";
import { Box, Button, Container } from '@mui/material';
const services = [
  {
    id: 1,
    title: 'Lenovo thinkpad',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor auctor mauris consectetur, eu lacinia justo congue.',
    imageUrl: product5,
  },
  {
    id: 2,
    title: 'Service 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor auctor mauris consectetur, eu lacinia justo congue.',
    imageUrl: product4,
  },
  {
    id: 3,
    title: 'Service 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor auctor mauris consectetur, eu lacinia justo congue.',
    imageUrl: product2,
  },
  {
    id: 4,
    title: 'Service 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor auctor mauris consectetur, eu lacinia justo congue.',
    imageUrl: product5,
  },
  {
    id: 5,
    title: 'Service 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor auctor mauris consectetur, eu lacinia justo congue.',
    imageUrl: product4,
  },
  {
    id: 6,
    title: 'Service 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor auctor mauris consectetur, eu lacinia justo congue.',
    imageUrl: product2,
  },
];

const Service = () => {
  return (
    <Container style={{ marginTop: '100px',marginBottom: '100px' }}>
      <Grid container spacing={3}>
        {services.map(service => (
          <Grid key={service.id} item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image={service.imageUrl}
                alt={service.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {service.description}
                </Typography>
                <Box sx={{paddingTop:"20px"}}>
                <Button variant="outlined">View</Button>
                <Button sx={{marginLeft: '40px'}} variant="outlined">Add To Cart</Button></Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Service;
