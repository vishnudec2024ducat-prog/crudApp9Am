import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const getAllProducts = createAsyncThunk("getAllProducts", async ()=>{
       try {
          const res = await axios.get("https://fakestoreapi.com/products");
         return res.data;
       } catch (error) {
        console.log(error)
       }
});
const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    productList: [],
    product: {},
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending,(state,action)=>{
            state.isLoading=true
    }).addCase(getAllProducts.fulfilled,(state,action)=>{
        state.isLoading=false
        state.productList = action.payload
    })
  },
});

export default ProductSlice.reducer