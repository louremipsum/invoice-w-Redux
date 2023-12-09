import React from "react";

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
        There are no invoices to display at the moment.
      </p>
    </div>
  );
};

export default NoInvoices;
