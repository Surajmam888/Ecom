import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Container,
  CardMedia,
  Grid,
  Divider,
  IconButton
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // State to manage quantity

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

  const handleAddToCart = () => {
    if (!product) {
      console.error("No product data available.");
      return;
    }

    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingItemIndex = existingCartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If product is already in cart, update quantity
      existingCartItems[existingItemIndex].quantity += quantity;
    } else {
      // If product is not in cart, add it with specified quantity
      const discountedPrice = product.price - (product.price * product.discountPercentage) / 100;
      existingCartItems.push({
        id: product.id,
        title: product.title,
        price: product.price,
        discountPercentage: product.discountPercentage,
        discountedPrice: discountedPrice,
        brand: product.brand,
        image: product.images[0],
        quantity: quantity // Use the specified quantity
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
    console.log("Product added to cart:", product.id);
  };

  const handleQuantityIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const discountedPrice = product ? product.price - (product.price * product.discountPercentage) / 100 : null;

  return (
    <Container maxWidth="md" sx={{ marginTop: "100px", marginBottom: "100px" }}>
      {product ? (
        <Card sx={{ display: "flex" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <CardMedia
                component="img"
                image={product.images[0]}
                alt={product.title}
                sx={{ height: '200px', width: 'auto', padding: "15px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardContent>
                <Typography variant="h5" color="textSecondary">
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
                  Discounted Price: ${discountedPrice?.toFixed(2)}
                </Typography>
                <Typography variant="h5" color="textSecondary">
                  Brand: {product.brand}
                </Typography>
                <Grid container alignItems="center" mt={2}>
                  <Typography variant="subtitle1" mr={2}>
                    Quantity:
                  </Typography>
                  <IconButton onClick={handleQuantityDecrease}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography variant="subtitle1">
                    {quantity}
                  </Typography>
                  <IconButton onClick={handleQuantityIncrease}>
                    <AddIcon />
                  </IconButton>
                </Grid>
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


