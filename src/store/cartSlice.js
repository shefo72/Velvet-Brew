import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // items: [
  //   {
  //     product_id: 1,
  //     product_name: "Espresso",
  //     category_name: "Fresh Brews",
  //     base_price: 4.5,
  //     image_url: "/src/assets/products/1.png",
  //     rating: 4.8,
  //     badge: "Bestseller",
  //     quantity: 1,
  //     totalPrice: 4.5,
  //   },
  //   {
  //     product_id: 2,
  //     product_name: "Flat White",
  //     category_name: "Fresh Brews",
  //     base_price: 5.5,
  //     image_url: "/src/assets/products/2.png",
  //     rating: 4.9,
  //     badge: null,
  //     quantity: 1,
  //     totalPrice: 5.5,
  //   },
  // ],
  items: [],
  totalQuantity: 2,
  totalAmount: 10,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.product_id === newItem.product_id,
      );

      state.totalQuantity++;
      state.totalAmount += newItem.base_price;

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.base_price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.base_price;
      }
    },

    incrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.product_id === id);

      existingItem.quantity++;
      state.totalQuantity++;
      state.totalAmount += existingItem.base_price;
    },

    decrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.product_id === id);

      if (existingItem) {
        state.totalQuantity--;
        state.totalAmount -= existingItem.base_price;

        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.product_id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.base_price;
        }
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.product_id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.product_id !== id);
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, decrementQuantity, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
