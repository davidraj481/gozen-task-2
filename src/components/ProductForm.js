import React, { useState } from 'react';

function ProductForm({ addProduct }) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price) return;
    addProduct(product);
    setProduct({ name: '', price: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={product.category}
        onChange={handleChange}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
