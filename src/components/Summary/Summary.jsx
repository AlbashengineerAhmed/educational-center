import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../asset/css/Bootstrap.min.css';
import '../Summary/Summary.css';

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
  return (
    <div className="DesignContainer p-0">
      <div className="DesignContainerOverly">
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card className="CardFeatures">
                <Card.Body>
                  <Card.Title className="CardTitle">What I Have Achieved</Card.Title>
                  <Card.Text>
                    <p className="CardSubTitle text-justify">
                      <FontAwesomeIcon icon={faCheckSquare} className="SmallIcon" />
                      Requirment Gathering
                    </p>
                    <p className="CardSubTitle text-justify">
                      <FontAwesomeIcon icon={faCheckSquare} className="SmallIcon" />
                      Design and Planning
                    </p>
                    <p className="CardSubTitle text-justify">
                      <FontAwesomeIcon icon={faCheckSquare} className="SmallIcon" />
                      Implementation
                    </p>
                    <p className="CardSubTitle text-justify">
                      <FontAwesomeIcon icon={faCheckSquare} className="SmallIcon" />
                      Testing and QA
                    </p>
                    <p className="CardSubTitle text-justify">
                      <FontAwesomeIcon icon={faCheckSquare} className="SmallIcon" />
                      Deployment
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={8} md={6} sm={12} className="text-center">
              <Row className="RowSection">
                <Col>
                  <FontAwesomeIcon icon={faGlobe} className="IconDesign" />
                  <h1 className="Numbers">3000</h1>
                  <h4 className="Title">Students Worldwide</h4>
                  <hr className="bg-black wd-25 " />
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faLaptop} className="IconDesign" />
                  <h1 className="Numbers">5</h1>
                  <h4 className="Title">Courses Published</h4>
                  <hr className="bg-black wd-25 " />
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faStar} className="IconDesign" />
                  <h1 className="Numbers">1000</h1>
                  <h4 className="Title">Student Reviews</h4>
                  <hr className="bg-black wd-25 " />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Summary;
