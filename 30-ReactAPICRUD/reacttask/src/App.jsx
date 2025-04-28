import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/card/Card';
import "./App.css"

const App = () => {
  const baseUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [added, setAdded] = useState("");

  const setProduct = async () => {
    let res = await axios.get(baseUrl);
    setProducts(res.data);

  };

  const addProduct = async () => {
    if (!added) return;

    let newProduct = {title: added};
    await axios.post(baseUrl, newProduct);

    setProduct();
    setAdded("");
  };

  const removeAllProducts = async () => {
    await Promise.all(products.map((product) => axios.delete(`${baseUrl}/${product.id}`)));
    setProducts([]);
  };

  const delProduct = async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    setProduct()
  };

  const editProduct = async (id) => {
    const newName = prompt("Yeni məhsul adi ");
    if (newName && newName !== "") {

      await axios.put(`${baseUrl}/${id}`, {title: newName});
      setProduct();

    }
  };

  useEffect(() => {
    setProduct();
  }, []);

  return (
    <div className="app-container">
      <input
        type="text"
        value={added}
        onChange={(e) => setAdded(e.target.value)}
        className="inputS"
      />
      <button onClick={addProduct} className="add-btn">ADD</button>
      <ul className="product-list">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            delProduct={delProduct}
            editProduct={editProduct}
          />
        ))}
      </ul>
      <button onClick={removeAllProducts}>Remove all</button>
    </div>
  );
};

export default App;
