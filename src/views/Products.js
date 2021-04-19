import React from 'react';
import { useSelector } from 'react-redux';
import { CategoriesList } from '../containers/CategoriesList';
import { Layout } from '../containers/Layout';
import { ProductsList } from '../containers/ProductsList';

export const Products = () => {
  const { categoriesBoxIsOpen } = useSelector((state) => state.ui);

  return (
    <Layout>
      {categoriesBoxIsOpen && <CategoriesList />}
      <ProductsList />
    </Layout>
  );
};
