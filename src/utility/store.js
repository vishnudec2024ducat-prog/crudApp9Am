import {configureStore} from "@reduxjs/toolkit"
import CounterSlice from "./CounterSlice.js";
import ProductSlice1 from "./ProductSlice.js";
import UserSlice from "./UserSlice.js"
const store = configureStore({
  reducer: {
    counterApp: CounterSlice,
    productSlice: ProductSlice1,
    userSlice:UserSlice
  },
});

export default store