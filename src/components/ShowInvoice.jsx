import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import GenerateInvoice from "../function/GenerateInvoice";
import { BiCloudDownload, BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ShowInvoice = (props) => {
  // Used useNavigate hook to navigate to edit page with props
  const navigate = useNavigate();

  const handleEditInvoice = () => {
    navigate("/edit", { state: { info: props.info } });
  };

  return (
    <div>
      <Modal
        show={props.showModal}
        onHide={props.closeModal}
        size="lg"
        centered
      >
        <div id="invoiceCapture">
          <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
            <div className="w-100">
              <h4 className="fw-bold my-2">
                {props.info.billFrom || "Louremipsum Inc."}
              </h4>
              <h6 className="fw-bold text-secondary mb-1">
                Invoice #: {props.info.invoiceNumber || ""}
              </h6>
            </div>
            <div className="text-end ms-4">
              <h6 className="fw-bold mt-1 mb-2">Amount&nbsp;Due:</h6>
              <h5 className="fw-bold text-secondary">
                {" "}
                {props.currency} {props.total}
              </h5>
            </div>
          </div>
          <div className="p-4">
            <Row className="mb-4">
              <Col md={4}>
                <div className="fw-bold">Billed to:</div>
                <div>{props.info.billTo || ""}</div>
                <div>{props.info.billToAddress || ""}</div>
                <div>{props.info.billToEmail || ""}</div>
              </Col>
              <Col md={4}>
                <div className="fw-bold">Billed From:</div>
                <div>{props.info.billFrom || ""}</div>
                <div>{props.info.billFromAddress || ""}</div>
                <div>{props.info.billFromEmail || ""}</div>
              </Col>
              <Col md={4}>
                <div className="fw-bold mt-2">Date Of Issue:</div>
                <div>{props.info.dateOfIssue || ""}</div>
              </Col>
            </Row>
            <Table className="mb-0">
              <thead>
                <tr>
                  <th>QTY</th>
                  <th>DESCRIPTION</th>
                  <th className="text-end">PRICE</th>
                  <th className="text-end">AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {props.items?.map((item, i) => {
                  return (
                    <tr id={i} key={i}>
                      <td style={{ width: "70px" }}>{item.quantity}</td>
                      <td>
                        {item.name} - {item.description}
                      </td>
                      <td className="text-end" style={{ width: "100px" }}>
                        {props.currency} {item.price}
                      </td>
                      <td className="text-end" style={{ width: "100px" }}>
                        {props.currency} {item.price * item.quantity}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <Table>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="text-end">
                  <td></td>
                  <td className="fw-bold" style={{ width: "100px" }}>
                    SUBTOTAL
                  </td>
                  <td className="text-end" style={{ width: "100px" }}>
                    {props.currency} {props.subTotal}
                  </td>
                </tr>
                {props.taxAmmount !== 0.0 && (
                  <tr className="text-end">
                    <td></td>
                    <td className="fw-bold" style={{ width: "100px" }}>
                      TAX
                    </td>
                    <td className="text-end" style={{ width: "100px" }}>
                      {props.currency} {props.taxAmmount}
                    </td>
                  </tr>
                )}
                {props.discountAmmount !== 0.0 && (
                  <tr className="text-end">
                    <td></td>
                    <td className="fw-bold" style={{ width: "100px" }}>
                      DISCOUNT
                    </td>
                    <td className="text-end" style={{ width: "100px" }}>
                      {props.currency} {props.discountAmmount}
                    </td>
                  </tr>
                )}
                <tr className="text-end">
                  <td></td>
                  <td className="fw-bold" style={{ width: "100px" }}>
                    TOTAL
                  </td>
                  <td className="text-end" style={{ width: "100px" }}>
                    {props.currency} {props.total}
                  </td>
                </tr>
              </tbody>
            </Table>
            {props.info.notes && (
              <div className="bg-light py-3 px-4 rounded">
                {props.info.notes}
              </div>
            )}
          </div>
        </div>
        <div className="pb-4 px-4">
          <Row>
            <Col md={6}>
              <Button
                variant="outline-primary"
                className="d-block w-100 mt-3 mt-md-0"
                onClick={handleEditInvoice}
              >
                <BiEdit
                  style={{ width: "16px", height: "16px", marginTop: "-3px" }}
                  className="me-2"
                />
                Edit Invoice
              </Button>
            </Col>
            <Col md={6}>
              <Button
                variant="outline-primary"
                className="d-block w-100 mt-3 mt-md-0"
                onClick={() => GenerateInvoice(props.info.invoiceNumber)}
              >
                <BiCloudDownload
                  style={{ width: "16px", height: "16px", marginTop: "-3px" }}
                  className="me-2"
                />
                Download Copy
              </Button>
            </Col>
          </Row>
        </div>
      </Modal>
      <hr className="mt-4 mb-3" />
    </div>
  );
};

export default ShowInvoice;
