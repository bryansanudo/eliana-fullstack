import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/redux/slice/authSlice";
import productReducer from "@/redux/slice/productSlice";
import filterReducer from "@/redux/slice/filterSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
