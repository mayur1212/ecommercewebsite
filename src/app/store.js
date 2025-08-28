// app/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import productsData from './data/products.json';

// Slice for products
const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: productsData,
    filter: 'all',
    search: ''
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const { setFilter, setSearch } = productSlice.actions;

export const store = configureStore({
  reducer: {
    products: productSlice.reducer
  }
});
