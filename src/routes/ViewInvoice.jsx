import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Col, Row, ButtonGroup } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import NoInvoices from "../components/NoInvoices";
import { removeItem } from "../features/invoices/invoiceSlice";
import InvoiceModal from "../components/InvoiceModal";

const ViewInvoice = () => {
  const { invoiceList } = useSelector((state) => state.invoices);
  const dispatch = useDispatch();
  console.log("List ->", invoiceList);
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentOpenInvoice, setCurrentOpenInvoice] = React.useState({});

  // const openModal = (event) => {
  //   event.preventDefault();
  //   this.handleCalculateTotal();
  //   this.setState({ isOpen: true });
  // };
  const closeModal = (event) => this.setState({ isOpen: false });

  const handleViewInvoice = (itemID) => {
    setIsOpen(true);
    const currentInvoice = invoiceList.find((item) => item.UID === itemID);
    setCurrentOpenInvoice(currentInvoice);
  };

  return (
    <div>
      <NavigationBar />
      {invoiceList.length === 0 && <NoInvoices />}
      <Row xs={2} md={4} lg={10}>
        {invoiceList?.map((invoice) => (
          <Col
            key={invoice.UID}
            onClick={() => handleViewInvoice(invoice.UID)}
            className="rectInvoice"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Header>Invoice No. {invoice.invoiceNumber}</Card.Header>
              <Card.Body>
                <Card.Title>To, {invoice.billTo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Amount Due: {invoice.subTotal}
                </Card.Subtitle>
                <Card.Text>Issue Date: {invoice.dateOfIssue}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <ButtonGroup aria-label="actions">
                  <Button variant="primary">Edit</Button>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeItem(invoice.UID))}
                  >
                    Delete
                  </Button>
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
