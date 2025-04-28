import React from 'react';

const Card = ({ product, delProduct, editProduct }) => {
  return (
    <li style={{ marginBottom: "10px" }}>
      <span>{product.title}  ||  {product.price}</span>
      <button onClick={() => delProduct(product.id)} style={{ marginLeft: "10px",  backgroundColor:"red"}}>
        DELETE
      </button>
      <button onClick={() => editProduct(product.id)} style={{ marginLeft: "5px" , backgroundColor:"green"}}>
        EDIT
      </button>
    </li>
  );
};

export default Card;
