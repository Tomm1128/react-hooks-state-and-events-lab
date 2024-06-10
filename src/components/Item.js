import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)

  const updateCart = (event) => {
    if (event.target.parentElement.childNodes[0].textContent === name){
      setCart(!inCart)
    }
  }

  const btnText = inCart ? "Remove From Cart" : "Add to Cart"
  const checkCart = inCart ? "in-cart" : ""

  return (
    <li className={checkCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={updateCart} className="add">{btnText}</button>
    </li>
  );
}

export default Item;
