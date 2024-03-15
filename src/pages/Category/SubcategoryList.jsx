import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { Box, Grid, CircularProgress, Typography } from '@mui/material';

const SubcategoryList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category/smartphones');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box sx={{ flexGrow: 1,paddingBottom:"100px" }}>
      <Typography sx={{textAlign:"center"}}>SubCategory</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={4} md={3} lg={2} key={product.id}>
              <CategoryCard
                title={product.title}
                // Assuming there's a field for image URL in the API response
                image={product.image}
                id={product.id} 
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default SubcategoryList;
