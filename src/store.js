import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "./features/invoices/lsinvoice.js";
export const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
  },
});
