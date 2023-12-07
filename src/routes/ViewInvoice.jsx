import React from "react";
import { useSelector } from "react-redux";
import { Card, Button, Col, Row, ButtonGroup } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";

const ViewInvoice = () => {
  const { invoiceList } = useSelector((state) => state.invoices);

  console.log("list->", invoiceList);
  return (
    <div>
      <NavigationBar />

      <Row xs={2} md={4} lg={10}>
        {invoiceList.map((invoice) => (
          <Col key={invoice.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Header>Invoice No. {invoice.invoiceNumber}</Card.Header>
              <Card.Body>
                <Card.Title>To, {invoice.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Amount Due: {invoice.amountDue}
                </Card.Subtitle>
                <Card.Text>Issue Date: {invoice.issueDate}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <ButtonGroup aria-label="actions">
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger">Delete</Button>
                  <Button variant="secondary">Duplicate</Button>
                </ButtonGroup>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ViewInvoice;
