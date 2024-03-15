import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import Loader from "../../component/Loading/Loading";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");

        // Assuming the API response has a property named 'products'
        const responseData = response.data.products;

        if (Array.isArray(responseData)) {
          setProducts(responseData);
        } else {
          setError("Invalid data format received");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products");
      }
    };

    fetchData();
  }, []);

  // Function to filter products by category
  const filterProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  return (
    <Container sx={{ padding: "20px" }}>
      <Box sx={{ textAlign: "center", padding: "20px" }}>
        <Typography variant="h4">Category Page</Typography>
      </Box>

      {/* Render section for each category */}
      <Box>
        <Typography variant="h5" component="div">
          Mobiles
        </Typography>
        <Divider />
        <Grid container spacing={3}>
          {filterProductsByCategory("mobile").map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Box>
      <Box>
        <Typography variant="h5" component="div">
          Laptops
        </Typography>
        <Divider />
        <Grid container spacing={3}>
          {filterProductsByCategory("laptop").map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Box>

      {/* <Box>
        <Typography variant="h5" component="div">
          Laptops
        </Typography>
        <Divider />
        <Grid container spacing={3}>
          {filterProductsByCategory("laptop").map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Box> */}

      {/* <Box>
        <Typography variant="h5" component="div">
          Laptops
        </Typography>
        <Divider />
        <Grid container spacing={3}>
          {filterProductsByCategory("laptop").map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Box> */}
      {error ? <p>{error}</p> : <Loader />}
    </Container>
  );
};

export default Category;
