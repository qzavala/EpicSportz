import React, { useEffect, useState } from "react"
 import "./cart.css" 
import CartItemCard from "./CartItemCard"
import { addCartItem } from "../Pages/helpers"
import { removeCartItem } from "../Pages/helpers"
import { editCartItemQunatity } from "../Pages/helpers"
import { Link, Navigate, useNavigate } from "react-router-dom"

const Cart = ({ cart, products, setCart, reduce }) => {
  const [subTotal, setSubTotal] = useState(0);
  console.log("cart", cart);

  const navigate = useNavigate();

  const getAllItemDetails = (cartItem) =>
    products.find((product) => product.id === cartItem.productId);

  const handleIncrement = (id) => {
    setCart((prevCart) => addCartItem(prevCart, id));
  };

  const handleDecrement = (id) => {
    setCart((prevCart) => removeCartItem(prevCart, id));
  };

  const handleEditQuantity = (id, newQuantity) => {
    setCart((prevCart) => editCartItemQunatity(prevCart, id, newQuantity));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const getTotalCart = () => {
      return cart.reduce((total, item) => {
        const product = products.find(
          (product) => product.id === item.productId
        );
        if (product) {
          console.log(product);
          return total + product.price * item.quantity;
        } else return total;
      }, 0);
    };
    const total = getTotalCart();
    setSubTotal(total);
  }, [cart, products]);

  return (
    <div>
      <h1 className="s-cart">Shopping Cart</h1>
      <p className="s-total">Total Items: </p>
      {cart.map((item) => {
        const productItem = getAllItemDetails(item);
        return (
          <CartItemCard
            key={productItem?.id}
            cartItem={productItem}
            quanity={item.quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onEdit={handleEditQuantity}
          />
        );
      })}
      <p className="s-subtotal">Subtotal: {isNaN(subTotal) ? "$0:00" : `$${subTotal.toFixed(2)}`}</p>
      <button onClick={() => navigate("/checkout")}>Checkout</button>
    </div>
  );
};

export default Cart