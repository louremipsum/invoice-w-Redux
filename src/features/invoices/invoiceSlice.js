import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoiceList: [],
};

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.invoiceList = state.invoiceList.filter(
        (item) => item.UID !== itemId
      );
    },
    addItem: (state, action) => {
      const newItem = action.payload; // object of the current state of the invoice when the user clicks the Save button
      const updatedInvoiceList = state.invoiceList.map((item) =>
        item.UID === newItem.UID ? newItem : item
      );

      if (!updatedInvoiceList.includes(newItem)) {
        updatedInvoiceList.push(newItem);
      }

      state.invoiceList = updatedInvoiceList;
    },
  },
});

export const { removeItem, addItem } = invoiceSlice.actions;

export default invoiceSlice.reducer;
