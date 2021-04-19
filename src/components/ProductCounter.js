import React from 'react';

export const ProductCounter = ({ counter, setCounter }) => {
  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const disableSubtract = () => {
    if (counter === 1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="product-counter">
      <button disabled={disableSubtract()} onClick={handleSubtract}>
        -
      </button>
      <span>{counter}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};
