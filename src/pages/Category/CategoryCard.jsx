import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const cardStyle = {
  maxWidth: 345,
  margin: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 'auto',
  borderRadius:"50%",
  textAlign:"center",
};

const mediaStyle = {
  height: 0,
  paddingTop: '56.25%', // 16:9 aspect ratio
};

const CategoryCard = ({ image, title }) => {
  return (
    <Card sx={cardStyle}>
      <CardMedia
        sx={mediaStyle}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
