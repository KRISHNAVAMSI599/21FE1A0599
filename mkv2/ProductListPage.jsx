// src/components/ProductListPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductListPage.css';  // Importing CSS for styling

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');  // Replace with your actual API endpoint
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  return (
    <div className="product-list-page">
      <h1>All Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={`https://via.placeholder.com/300x200?text=${product.name}`} alt={product.name} />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p><strong>Company:</strong> {product.company}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <Link to={`/products/${product.id}`} className="btn btn-primary">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
