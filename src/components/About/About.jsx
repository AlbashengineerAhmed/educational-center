import React, { Fragment, useEffect, useRef } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import pic from '../../asset/image/logo.png';
import '../About/About.css';
import '../../asset/css/Bootstrap.min.css';
import { init } from 'ityped';

const About = () => {
  const myElementRef = useRef();

  useEffect(() => {
    const myElement = myElementRef.current;
    init(myElement, { showCursor: false, strings: ['improve your skills', 'your future!'] });
  }, []);

  return (
    <Fragment>
      <Container className="text-center py-5">
        <h1 className="serviceMainTitle text-center"> About Us</h1>
        <div className="bottom"></div>

        <Row>
          <Col lg={6} md={6} sm={12}>
            <img className="aboutImage" src={pic} />
          </Col>

          <Col lg={6} md={6} sm={12}>
            <div className="aboutBody">
              <h2 className="about1">HI There, We are</h2>
              <h2>Creative Team Programming</h2>
              <h3 className="about1">
                Work as <span ref={myElementRef}></span>{' '}
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
