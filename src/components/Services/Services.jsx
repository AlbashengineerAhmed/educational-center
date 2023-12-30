import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SerImg from '../../asset/image/Services.jpg';
import '../Services/Services.css';
import '../../asset/css/Bootstrap.min.css';

const Services = () => {
  return (
    <React.Fragment>
      <Container className="text-center my-5">
        <h1 className="serviceMainTitle"> MY SERVICES</h1>
        <div className="bottom"></div>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img src={SerImg} className="ServicesIcon" alt="Service Icon" />
              <h4 className="serviceName">OFFICE APPLICATIONS</h4>
              <p className="serviceDescription">
                If you want to set up a software internal system for your company, we design and program it to suit your business development.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img src={SerImg} className="ServicesIcon" alt="Service Icon" />
              <h4 className="serviceName">OFFICE APPLICATIONS</h4>
              <p className="serviceDescription">
                If you want to set up a software internal system for your company, we design and program it to suit your business development.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img src={SerImg} className="ServicesIcon" alt="Service Icon" />
              <h4 className="serviceName">OFFICE APPLICATIONS</h4>
              <p className="serviceDescription">
                If you want to set up a software internal system for your company, we design and program it to suit your business development.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Services;
