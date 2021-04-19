import React from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../components/ProductCard';
import { ProductsFilter } from '../components/ProductsFilter';
import { filterProducts } from '../utils/filter';

export const ProductsList = () => {
  const { products, activeFilter, activeCategory } = useSelector(
    (state) => state.products,
  );

  const filteredProducts = filterProducts(
    products,
    activeCategory,
    activeFilter,
  );

  return (
    <div className="products-list">
      <ProductsFilter />
      <div className="products-list-content">
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
