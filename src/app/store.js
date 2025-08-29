// app/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import productsData from './data/products.json';
import cartReducer from './cartSlice'; // ✅ import your cart slice


// Slice for products
const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: productsData,
    filter: 'all',
    search: '',
    sort: 'default',
    priceRange: [0, 10000]
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    }
  }
});

export const { setFilter, setSearch, setSort, setPriceRange } = productSlice.actions;

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartReducer   // ✅ now state.cart exists
  }
});
