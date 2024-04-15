import React from "react"
import "./cartItemCard.css"

const CartItemCard = ({
  cartItem,
  quantity,
  onIncrement,
  onDecrement,
  onEdit,
}) => {
  const handleIncrement = () => {
    console.log({ cartItem });
    onIncrement(cartItem.id);
  };

  const handleDecrement = () => {
    onDecrement(cartItem.id);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = Number(event.target.value);
    onEdit(cartItem.id, newQuantity);
  };
  return (
    <div className="cart-item-card">
      <div className="cart-image-container">
        <img
          src={cartItem?.image}
          alt={cartItem?.title}
          className="cart-item-image"
        />
      </div>
      <div className="cart-item-details">
        <h3 className="s-title">{cartItem?.title}</h3>
        <p className="s-price">Price: ${cartItem?.price}</p>
        <p className="s-quantity">Quantity: {quantity}</p>
        <select value={quantity} onChange={handleQuantityChange}>
          {[...Array(30).keys()].map((index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="quanity-buttons">
        <button className="quantity-buttons" onClick={handleIncrement}>
          +
        </button>
        <button className="quantity-buttons" onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default CartItemCard