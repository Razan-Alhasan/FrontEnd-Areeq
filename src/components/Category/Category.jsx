import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { getProducts } from '../../api/productsApi';
import './Category.css'

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/products?category=${categoryName}`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div>
      <h1>Products for {categoryName}</h1>
      {products.map((product) => (
        <div key={product._id}>
          <Link to={`/products/${product._id}`}>
            <img src={product.images[0]} alt={product.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
