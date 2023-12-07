import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoiceList: [
    {
      id: 1,
      invoiceNumber: 789,
      name: "loureipsum",
      amountDue: "85.99",
      issueDate: "48-7-89589",
    },
    {
      id: 2,
      invoiceNumber: 789,
      name: "loureipsum",
      amountDue: "85.99",
      issueDate: "48-7-89589",
    },
    {
      id: 3,
      invoiceNumber: 789,
      name: "loureipsum",
      amountDue: "85.99",
      issueDate: "48-7-89589",
    },
    {
      id: 4,
      invoiceNumber: 789,
      name: "loureipsum",
      amountDue: "85.99",
      issueDate: "48-7-89589",
    },
  ],
};

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
});

// console.log(invoiceSlice);

export default invoiceSlice.reducer;
