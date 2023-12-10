import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import EditInvoice from "../components/EditInvoice";
import { useLocation } from "react-router-dom";

/**
 * Renders the Edit component.
 *
 * @returns {JSX.Element} The rendered Edit component.
 */
const Edit = () => {
  const location = useLocation();
  const info = location.state.info;
  return (
    <div>
      <NavigationBar />
      <Container style={{ marginTop: "1rem" }}>
        <Row>
          <Col>
            <h1>Edit Invoice</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <EditInvoice info={info} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Edit;
