import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const ReactBootstrapGridSample = () => (
  <Container style={{ margin: 50 }}>
    <Row>
      <Col lg={4} md={8} sm={12}>
        Col1
      </Col>
      <Col lg={4} md={4} sm={12}>
        Col2
      </Col>
      <Col lg={4} md={12} sm={12}>
        Col3
      </Col>
    </Row>
  </Container>
);

export default ReactBootstrapGridSample;