import React from "react";
import "./PDetails.css";
import { useNavigate } from "react-router-dom";
import { addCartItem } from "../Pages/helpers";

const ProductDetails = ({ product, isSingle, cart, setCart }) => {
  console.log("cart", cart);
  const navigate = useNavigate();
  const handleViewItemClick = () => {
    navigate(`/products/${product.id}`);
  };
  const handleAddToCart = () => {
    const productId = product.id;
    setCart((prevCart) => addCartItem(prevCart, productId));
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-content">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p>{product.category}</p>
        {isSingle && <p className="product-description">{product.description}</p>}
        <button className="product-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        {!isSingle && (
          <button onClick={handleViewItemClick} className="view-item-button">
            View Item
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;