import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddInvoice from "./routes/AddInvoice";
import ViewInvoice from "./routes/ViewInvoice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewInvoice />,
  },
  {
    path: "/create",
    element: <AddInvoice />,
  },
  {
    path: "/edit",
    element: <div>Edit page</div>,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
