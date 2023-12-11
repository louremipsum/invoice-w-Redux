import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// The initial state of the invoices slice
const initialState = {
  invoiceList: [],
};

/**
 * Adds an item to the invoices list asynchronously.
 * On successful addition, a toast is shown.
 * @param {Object} newItem - The new item to be added.
 * @param {Object} options - The options object containing getState and dispatch functions.
 * @returns {Promise} A promise that resolves when the item is added.
 */
export const addItem = createAsyncThunk(
  "invoices/addItem",
  async (newItem, { getState, dispatch }) => {
    const { invoiceList } = getState().invoices;
    // Check if the item is valid(not null, undefined, "" empty string) and not a duplicate
    if (!newItem || invoiceList.find((item) => item.UID === newItem.UID)) {
      toast.error("Invoice not saved. Duplicate or invalid item.");
      return;
    }
    dispatch(invoiceSlice.actions.addItem(newItem));
    toast.success("Invoice saved successfully");
  }
);

/**
 * Edits an item in the invoices.
 *
 * @param {Object} updatedItem - The updated item to be edited.
 * @param {Object} dispatch - The Redux dispatch function.
 * @returns {Promise<void>} - A promise that resolves when the item is edited successfully.
 */
export const editItem = createAsyncThunk(
  "invoices/editItem",
  async (updatedItem, { dispatch }) => {
    if (!updatedItem) {
      toast.error("Invoice not updated. Invalid item.");
      return;
    }
    dispatch(invoiceSlice.actions.editItem(updatedItem));
    toast.success("Invoice updated successfully");
  }
);

/**
 * Removes an item from the invoices list asynchronously.
 * On successful removal, a toast is shown.
 * @param {string} itemId - The ID of the item to be removed.
 * @param {object} options - The options object containing getState and dispatch functions.
 * @returns {Promise<void>} A promise that resolves when the item is removed.
 */
export const removeItem = createAsyncThunk(
  "invoices/removeItem",
  async (itemId, { getState, dispatch }) => {
    const { invoiceList } = getState().invoices;
    // Checks if the item to be removed actually exists in the list
    if (!invoiceList.find((item) => item.UID === itemId)) {
      toast.error("Invoice not deleted. Invalid ID.");
      return;
    }
    dispatch(invoiceSlice.actions.removeItem(itemId));
    toast.success("Invoice deleted successfully");
  }
);

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
      // The payload is the item UID
      const itemId = action.payload;
      // Remove the item from the list using filter by UID
      state.invoiceList = state.invoiceList.filter(
        (item) => item.UID !== itemId
      );
    },
    addItem: (state, action) => {
      // The payload is the new item
      const newItem = action.payload;
      // state.invoiceList = state.invoiceList.filter(
      //   (item) => item.UID !== newItem.UID
      // );

      // Pushing the new Item
      state.invoiceList.push(newItem);
    },
    editItem: (state, action) => {
      // The payload is the updated item
      const updatedItem = action.payload;
      // Remove the item from the list using filter by UID, which will work both in case of edit and add
      state.invoiceList = state.invoiceList.filter(
        (item) => item.UID !== updatedItem.UID
      );
      // Pushing the updated Item
      state.invoiceList.push(updatedItem);
    },
  },
});

export default invoiceSlice.reducer;
