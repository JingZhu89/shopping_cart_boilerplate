import { useState } from "react";

const AddProductForm = ({ onCancel, onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const reset = () => {
    setName('');
    setPrice('');
    setQuantity('');
  };

  return (
    <>
      <h3>Add Product</h3>
      <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit(name, price, quantity, reset);
        }}>
        <div class="input-group">
          <label for="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div class="input-group">
          <label for="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div class="input-group">
          <label for="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div class="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </>
  );
};

export default AddProductForm;
