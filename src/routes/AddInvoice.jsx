import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import InvoiceForm from "../components/InvoiceForm";

/**
 * Renders the AddInvoice component.
 * @returns {JSX.Element} The rendered AddInvoice component.
 */
const AddInvoice = () => {
  return (
    <div>
      <NavigationBar />
      <Container style={{ marginTop: "1rem" }}>
        <Row>
          <Col>
            <h1>Add Invoice</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <InvoiceForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddInvoice;
