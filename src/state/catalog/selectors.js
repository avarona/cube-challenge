import { createSelector } from "@reduxjs/toolkit";

export const selectCatalog = (state) => state.catalog;

export const selectProducts = createSelector(
  selectCatalog,
  (catalog) => catalog.products
);

export const selectFilteredProducts = (text) => createSelector(
  selectProducts,
  (products) => products.filter(product => product.name.toLowerCase().includes(text))
);