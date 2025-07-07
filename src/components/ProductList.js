import React from 'react';

function ProductList({ products, deleteProduct }) {
  return (
    <div>
      <h2>🧾 Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <b>{product.name}</b> - ₹{product.price} ({product.category})
            <button onClick={() => deleteProduct(product.id)} style={{ marginLeft: 10 }}>
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
