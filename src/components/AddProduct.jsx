import React, { useState } from 'react';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <div key={key}>
          <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          <input name={key} value={formData[key]} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddProduct;