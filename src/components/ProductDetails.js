import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <Link to="/">← Back to Home</Link>
      <div className="details-container">
        <img src={product.thumbnail} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>
            Price: <b>${product.price}</b>
          </p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
