import React, { useState, useEffect } from "react"
import { getSingleProduct } from "../API"
import { useParams } from "react-router-dom"
import ProductDetails from "./ProductDetails"

const SingleProduct = ({cart, setCart}) => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const result = await getSingleProduct(productId);
      setProduct(result);
    };
    fetchSingleProduct();
  }, [productId]);

  if (!product) {
    return <h1>Please Wait...</h1>
  }

  return <ProductDetails product={product} isSingle setCart={setCart} cart={cart} />;
};

export default SingleProduct