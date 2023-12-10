import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// The initial state of the invoices slice
const initialState = {
  invoiceList: [],
};

/**
 * Represents a slice of the invoice state.
 *
 * @typedef {Object} InvoiceSlice
 * @property {string} name - The name of the slice.
 * @property {Object} initialState - The initial state of the slice.
 * @property {Object} reducers - The reducers for the slice.
 * @property {Function} reducers.removeItem - Reducer function to remove an item from the invoice list.
 * @property {Function} reducers.addItem - Reducer function to add/edit an item in the invoice list.
 */
const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemId = action.payload;

      // Remove the item from the invoice list by filtering it out
      state.invoiceList = state.invoiceList.filter(
        (item) => item.UID !== itemId
      );
      toast.success("Invoice deleted successfully");
    },
    addItem: (state, action) => {
      const newItem = action.payload; // object of the current state of the invoice when the user clicks the Save button
      // Remove the old item
      const updatedInvoiceList = state.invoiceList.filter(
        (item) => item.UID !== newItem.UID
      );
      // Push the new item
      updatedInvoiceList.push(newItem);
      // Update the invoice list
      state.invoiceList = updatedInvoiceList;
      toast.success("Invoice saved successfully");
    },
  },
});

// Export the reducer and the actions
export const { removeItem, addItem } = invoiceSlice.actions;

export default invoiceSlice.reducer;
