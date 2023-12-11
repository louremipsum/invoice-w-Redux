import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import AddInvoice from "./routes/AddInvoice";
import ViewInvoice from "./routes/ViewInvoice";
import Edit from "./routes/Edit";
import ErrorPage from "./routes/Error";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewInvoice />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <AddInvoice />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/edit",
    element: <Edit />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
