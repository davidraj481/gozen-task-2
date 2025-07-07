import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    const res = await axios.post('http://localhost:5000/products', product);
    setProducts([...products, res.data]);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="container" background color='red'>
      <h1>🛒 E-Commerce Product Manager</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
      <p style={{ textAlign: 'center', marginTop: '30px', color: '#666' }}>
        ❤️ Love by David
      </p>
    </div>
  );
  
}
export default App;
