import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { product, quantity = 1 } = action.payload;

      const itemIndex = state.items.findIndex(item => item.product.id === product.id); // find item if already in cart
      const cartItem = state.items[itemIndex];

      let itemsArray = [...state.items];

      // If new item is being selected, add it to the end of the array
      if(itemIndex < 0) itemsArray.push({ product, quantity });

      // if item exists in array, increment the quantity by 1
      if(itemIndex > -1 && cartItem.product.inventory > cartItem.quantity) {
        itemsArray = [
          ...state.items.slice(0, itemIndex),
          {
            ...state.items[itemIndex],
            quantity: state.items[itemIndex].quantity + 1,
          },
          ...state.items.slice(itemIndex + 1),
        ]
      }

      // return new state array of items
      return {
        ...state,
        items: itemsArray
      };
    },
    updateItem: (state, action) => {
      const { id, data } = action.payload;
      const itemIndex = state.items.findIndex(item => item.product.id === id);

      const itemsArray = [
        ...state.items.slice(0, itemIndex),
        {
          ...state.items[itemIndex],
          quantity: data.quantity,
        },
        ...state.items.slice(itemIndex + 1),
      ];

      return {
        ...state,
        items: itemsArray
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      let itemsArray = [...state.items];

      return {
        ...state,
        items: itemsArray.filter(e => e.product.id !== id)
      }
    }
  }
});

export const { addItem, updateItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
