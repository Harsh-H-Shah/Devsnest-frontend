import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getItems } from '../../services/mock';

const initialState = {
  products: [],
  currentProduct: null,
};

export const loadProducts = createAsyncThunk(
  async () => {
    const data = await getItems();
    console.log(data, 'loadProducts');
    return data;
  }
);

const ProductSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    resetCurrentProduct: (state) => {
      state.currentProduct = null;
    },
  },
  extraReducers: (cases) => {
    cases
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.products = [...action.payload];
      });
  },
});

export const {resetCurrentProduct} = ProductSlice.actions;
export default ProductSlice.reducer;
