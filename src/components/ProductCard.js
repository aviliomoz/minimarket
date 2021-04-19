import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveProduct } from '../redux/actions/productsActions';

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setActiveProduct(product))}
      className="product-card"
    >
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card-info">
        <h4>{product.name}</h4>
        <div className="product-card-info-price">
          <strong>S/{product.price} </strong>
          <span>x {product.um}</span>
        </div>
      </div>
    </div>
  );
};
