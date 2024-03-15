import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import SingleProductPage from "./SingleProductPage"
import Loader from "../../component/Loading/Loading";

const Products = () => {
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

  return (
    <Box sx={{padding:"20px",marginBottom:"80px"}}>
      <Box sx={{textAlign:"center", padding:"20px"}}><Typography variant="h4">Product Page</Typography></Box>
      <Grid container spacing={3}>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>{error || <Loader />}</p>
      )}
    </Grid>
    </Box>
  );
};

export default Products;
