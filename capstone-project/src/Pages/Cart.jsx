// import React, { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { fetchSingleProduct } from "../API"

// const cart = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     async function displayProduct() {
//       const { product } = await fetchSingleProduct(id);
//       console.log(product);
//       setProduct(product);
//     }
//     displayProduct();
//   }, []);
//   return (
//     <>
//       <h2>{product.title}</h2>
//       <p>{product.price}</p>
//       <p>{product.category}</p>
//       <img src={product.coverimage} alt={product.title} />
//       <p>{product.description}</p>
//     </>
//   );
// };

// export default cart