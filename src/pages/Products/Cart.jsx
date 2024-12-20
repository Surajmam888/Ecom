import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Container, Grid, Divider, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TotalProduct from "./TotalProduct";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]); 

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleRemoveFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const handleQuantityIncrease = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const handleQuantityDecrease = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: "100px", marginBottom: "100px" }}>
      {cartItems.length > 0 ? (
        <Grid container spacing={3}>
          {cartItems.map(item => (
            <Grid item xs={12} key={item.id}>
              <Card sx={{ display: "flex" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <img src={item.image} alt={item.title} style={{ height: '200px', width: 'auto', padding: "15px" }} />
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ marginTop: "30px" }}>
                    <CardContent>
                      <Typography variant="h5" component="div" color="textSecondary">
                        {item.title}
                      </Typography>
                      <Typography variant="subtitle2" color="primary">
                        Price: ${item.price}
                      </Typography>
                      <Typography variant="subtitle2" color="error">
                        Discount: {item.discountPercentage}%
                      </Typography>
                      <Typography variant="h6" color="secondary">
                        Discounted Price: ${item.discountedPrice?.toFixed(2)}
                      </Typography>
                      <Typography variant="h5" color="textSecondary">
                        Brand: {item.brand}
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Typography variant="subtitle1">
                        Quantity: {item.quantity}
                      </Typography>
                      {/* <IconButton onClick={() => handleQuantityDecrease(item.id)}>
                        <RemoveIcon />
                      </IconButton>
                      <IconButton onClick={() => handleQuantityIncrease(item.id)}>
                        <AddIcon />
                      </IconButton> */}
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Typography variant="subtitle1" color="error" style={{ cursor: 'pointer' }} onClick={() => handleRemoveFromCart(item.id)}>
                        Remove
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" component="div" align="center">
          Your cart is empty.
        </Typography>
      )}

      <TotalProduct/>
    </Container>
  );
};

export default CartPage;
