import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Product from './product';

function Home({ onAddToBasket, onRemoveFromBasket, basket }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const getProductCount = (id) => {
    const product = basket.find((item) => item.id === id);
    return product ? product.quantity : 0;
  };

  return (
    <div className='home'>
      <div className='home__container'>
        {products.map((product) => (
          <Product
            key={product._id}
            id={product._id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.imageUrl} // Ensure this URL is correct
            count={getProductCount(product._id)}
            onAddToBasket={onAddToBasket}
            onRemoveFromBasket={onRemoveFromBasket}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;