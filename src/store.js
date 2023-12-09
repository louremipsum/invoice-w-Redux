import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "./features/invoices/invoiceSlice.js";

export const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
  },
});
