export const filterProducts = (products, category, filter) => {
  let filteredProducts = [];

  if (category === 'all') {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(
      (product) => product.category === category,
    );
  }

  if (filter === 'Relevancia') {
    filteredProducts = filteredProducts.sort((a, b) => b.sold - a.sold);
  }

  if (filter === 'Precio más alto') {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (filter === 'Precio más bajo') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  }

  return filteredProducts;
};
