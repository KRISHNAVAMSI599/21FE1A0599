// src/components/ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetailPage.css';  // Importing CSS for styling

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products/${productId}`);  // Replace with your actual API endpoint
      setProduct(response.data.product);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-page">
      <h1>{product.name}</h1>
      <p><strong>Company:</strong> {product.company}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Discount:</strong> {product.discount}%</p>
      <p><strong>Availability:</strong> {product.available ? 'Available' : 'Out of stock'}</p>
      <img src={`https://via.placeholder.com/400x300?text=${product.name}`} alt={product.name} />
    </div>
  );
};

export default ProductDetailPage;
