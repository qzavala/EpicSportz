import React from "react"
import { useNavigate } from "react-router-dom"
import "./PDetails.css"


const ProductDetails = ({ product, isSingle }) => {
  const navigate = useNavigate();
  const handleViewItemClick = () => {
    navigate(`/${product.id}`);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-content">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p>{product.category}</p>
        {isSingle && <p className="product-description">{product.description}</p>}
        <button className="product-button">Add to Cart</button>
        {!isSingle && (
          <button onClick={handleViewItemClick} className="view-item-button">
            View Item
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails