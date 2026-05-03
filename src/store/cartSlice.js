import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
  getCart,
  addToCartApi,
  updateCartQuantityApi,
  removeFromCartApi,
} from "../api/cartApi";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  status: "idle",
  error: null,
};

// GET
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await getCart(userId);
      return response.data || response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch cart items",
      );
    }
  },
);

// POST
export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (itemData, { rejectWithValue }) => {
    try {
      await addToCartApi({
        customer_id: itemData.customer_id,
        product_id: itemData.product_id,
        quantity: itemData.quantity || 1,
      });
      return itemData;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add item to cart",
      );
    }
  },
);

// PUT
export const updateItemQuantity = createAsyncThunk(
  "cart/updateItemQuantity",
  async ({ cart_id, quantity, product_id }, { rejectWithValue }) => {
    try {
      await updateCartQuantityApi({ cart_id, quantity });
      return { cart_id, quantity, product_id };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update quantity",
      );
    }
  },
);

// DELETE
export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async ({ cart_id, product_id }, { rejectWithValue }) => {
    try {
      await removeFromCartApi(cart_id);
      return product_id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to remove item",
      );
    }
  },
);

const calculateTotals = (state) => {
  state.totalQuantity = 0;
  state.totalAmount = 0;

  state.items.forEach((item) => {
    state.totalQuantity += item.quantity;
    state.totalAmount += item.price * item.quantity;
  });
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 1. Get cart
      .addCase(fetchCartItems.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload && action.payload.success) {
          state.items = action.payload.items || [];
          state.totalAmount = action.payload.summary?.subtotal || 0;
          state.totalQuantity = state.items.reduce(
            (total, item) => total + item.quantity,
            0,
          );
        } else {
          state.items = [];
          state.totalQuantity = 0;
          state.totalAmount = 0;
        }
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        toast.error(action.payload);
      })

      // 2. Add item
      .addCase(addItemToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        const newItem = action.payload;

        const existingItem = state.items.find(
          (item) => item.product_id === newItem.product_id,
        );

        if (!existingItem) {
          state.items.push({ ...newItem, quantity: newItem.quantity || 1 });
        } else {
          existingItem.quantity += newItem.quantity || 1;
        }
        calculateTotals(state);
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.payload);
      })

      // 3. Update quantity
      .addCase(updateItemQuantity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateItemQuantity.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { product_id, quantity } = action.payload;
        const existingItem = state.items.find(
          (item) => item.product_id === product_id,
        );
        if (existingItem) {
          existingItem.quantity = quantity;
        }
        calculateTotals(state);
      })
      .addCase(updateItemQuantity.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.payload);
      })

      // 4. Delete item
      .addCase(removeItemFromCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        const id = action.payload;
        state.items = state.items.filter((item) => item.product_id !== id);
        calculateTotals(state);
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.payload);
      });
  },
});

export default cartSlice.reducer;
