import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Container, Grid } from "@mui/material";

const TotalProduct = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Calculate total quantity of products in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate total discounted price of products in the cart
  const totalDiscountedPrice = cartItems.reduce((total, item) => total + (item.discountedPrice * item.quantity), 0);

  return (
    <Container maxWidth="md" sx={{ marginTop: "100px", marginBottom: "100px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <CardContent>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                Total
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                Total Quantity: {totalQuantity}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Total Discounted Price: ${totalDiscountedPrice.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TotalProduct;
