import React from 'react';

const CartPage = ({ product }) => {
  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart
    console.log('Product added to cart:', product.id);
  };

  // Check if product exists before accessing its properties
  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="cart-page">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Category: {product.category}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default CartPage;
