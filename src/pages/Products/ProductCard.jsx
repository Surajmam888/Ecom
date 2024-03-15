import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  // const history = useHistory();
  const navigate = useNavigate();
  const {
    title,
    description,
    price,
    discountPercentage,
    brand,
    category,
    images,
  } = product;

  const discountedPrice = price - (price * discountPercentage) / 100;

  const handleAddToCart = () => {
    navigate(`/product/${product.id}`);
    console.log("click htis product:::" )
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardContent>
          {Array.isArray(images) && images.length > 0 && (
            <CardMedia
              component="img"
              alt={title}
              // height="260"
              // width="auto"
              image={images[0]}
              sx={{ height: '260px', width: '100%',padding:"0px" }}
            />
          )}
          <Typography variant="h6" gutterBottom>
            {title.slice(0, 25)}
          </Typography>
          <Typography color="textSecondary">{category}</Typography>
          <Typography variant="body2" component="p">
            {description.slice(0, 30)}
          </Typography>
          <Typography variant="h6" color="primary">
            Price: ${price}
          </Typography>
          <Typography variant="h6" color="error">
            Discount: {discountPercentage}%
          </Typography>
          <Typography variant="h6" color="secondary">
            Discounted Price: ${discountedPrice.toFixed(2)}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Brand: {brand}
          </Typography>
          <Button variant="outlined" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
