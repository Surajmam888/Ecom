import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, CardActions, Button, Typography, Container, CardMedia, Grid, Divider } from "@mui/material";

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

//   const discountedPrice = price - (price * discountPercentage) / 100;

  const handleAddToCart = () => {
    if (!product) {
      console.error("No product data available.");
      return;
    }

    // Get existing cart items from local storage or initialize as an empty array
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the product is already in the cart
    const isInCart = existingCartItems.find(item => item.id === product.id);

    if (isInCart) {
      console.log("Product is already in the cart.");
    } else {
      // Add the product to the cart
      const updatedCartItems = [...existingCartItems, { id: product.id, title: product.title }];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      console.log("Product added to cart:", product.id);
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: "100px",marginBottom: "100px" }}>
      {product ? (
        <Card sx={{display:"flex"}}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <CardMedia
                component="img"
                image={product.images[0]}
                alt={product.title}
                sx={{ height: '260px', width: 'auto',padding:"15px" }}
              />
            </Grid>
            {/* <Divider sx={{border:"1px solid black"}}/> */}
            <Grid item xs={12} sm={6}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
                <Typography variant="subtitle2" color="primary">
                  Price: ${product.price}
                </Typography>
                <Typography variant="subtitle2" color="error">
                  Discount: {product.discountPercentage}%
                </Typography>
                <Typography variant="h6" color="secondary">
                  Discounted Price: ${product.discountedPrice?.toFixed(2)}
                </Typography>
                <Typography variant="h4" color="textSecondary">
                  Brand: {product.brand}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" onClick={handleAddToCart}>Add to Cart</Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default SingleProductPage;
