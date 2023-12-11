import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import invoiceReducer from "./features/invoices/invoiceSlice.js";

/**
 * Configuration object for persisting the Redux store.
 * @type {Object}
 * @property {string} key - The key under which the state will be stored.
 * @property {Object} storage - The storage engine to be used for persisting the state. Here it is LocalStorage.
 */
const persistConfig = {
  key: "root",
  storage,
};

/**
 * The persisted reducer for the invoice generator store.
 */
const persistedReducer = persistReducer(persistConfig, invoiceReducer);

/**
 * The store object for the invoice generator application.
 */
export const store = configureStore({
  reducer: {
    invoices: persistedReducer,
  },
});

export const persistor = persistStore(store);
