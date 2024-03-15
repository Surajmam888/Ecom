import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data);
      setLoading(false);
      console.log(response);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const handleAddToCart = (productId) => {
    // Implement your logic to add the product to the cart
    console.log('Product added to cart:', productId);
  };

  return (
    // <div>
    //   <h1>Products</h1>
    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <div className="product-grid">
    //       {Array.isArray(products) && products?.map(product => (
    //         // <div key={product.id}>
    //         //   <h2>{product.title}</h2>
    //         //   <p>{product.description}</p>
    //         //   <p>Price: ${product.price}</p>
    //         //   <p>Discount: {product.discountPercentage}%</p>
    //         //   <p>Category: {product.category}</p>
    //         //   <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
    //         // </div>
    //         <div key={product.id}>
    //             <p>{product.title}</p>
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>
    <Container style={{ marginTop: '100px',marginBottom: '100px' }}>
        <Typography>Product</Typography>
      <Grid container spacing={3}>
        {Array.isArray(products) && products.map(service => (
          <Grid key={service.id} item xs={12} sm={6} md={4}>
            <Card>
              {/* <CardMedia
                component="img"
                height="240"
                image={service.imageUrl}
                alt={service.title}
              /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {service.description}
                </Typography>
                <Box>
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

export default ProductPage;
