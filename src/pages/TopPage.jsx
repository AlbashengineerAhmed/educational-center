import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../pages/PagesDesign.css';
import '../asset/css/Bootstrap.min.css';

const TopPage = ({ pagetitle }) => {
  return (
    <Fragment>
      <Container fluid className="topFixedPage p-0">
        <div className="topPageOverlay">
          <Container className="topContentPage">
            <Row>
              <Col className="text-center">
                <h4 className="topPageTitle">{pagetitle}</h4>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </Fragment>
  );
};

export default TopPage;
