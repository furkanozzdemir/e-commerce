import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import basketReducer from "./slices/basketSlice";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export default configureStore(
  {
    reducer: {
      category: categoryReducer,
      basket: basketReducer,
    },
  },
  composeWithDevTools()
);
