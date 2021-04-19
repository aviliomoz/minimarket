import React from 'react';
import { CategoriesList } from '../containers/CategoriesList';
import { Layout } from '../containers/Layout';
import { ProductsList } from '../containers/ProductsList';

export const Products = () => {
  return (
    <Layout>
      <CategoriesList />
      <ProductsList />
    </Layout>
  );
};
