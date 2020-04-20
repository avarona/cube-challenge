import { createSelector } from "@reduxjs/toolkit";

export const selectCart = (state) => state.cart;

export const selectItems = createSelector(selectCart, (cart) => cart.items);

export const selectTotalPrice = createSelector(selectItems, (items) => items.reduce((total, item) => {
  total += item.product.price * item.quantity;
  return total;
}, 0));
