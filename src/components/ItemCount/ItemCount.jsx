import { useState } from "react";
import "./itemcount.scss";

const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1);

  const handleClickDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="item-count-container">
      <button className="counter-button" onClick={handleClickDecrement}>-</button>
      <p>{count}</p>
      <button className="counter-button" onClick={handleClickIncrement}>+</button>
      <button onClick={() => addProduct(count)}>Agregar producto</button>
    </div>
  );
};

export default ItemCount;
