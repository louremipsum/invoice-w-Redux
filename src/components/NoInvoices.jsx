import React from "react";

/**
 * Renders a component to display when no invoices are found.
 * @returns {JSX.Element} The NoInvoices component.
 */
const NoInvoices = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="./nothingleft.png"
        alt="Nothing left"
        width="250px"
        height="250px"
        style={{ marginTop: "2rem" }}
      />

      <h1>No Invoices Found</h1>
      <p className="text-body-secondary">
        There are no invoices to display at the moment. Click{" "}
        <span style={{ fontWeight: 500 }}>Create Invoice </span>
        button to get started!
      </p>
    </div>
  );
};

export default NoInvoices;
