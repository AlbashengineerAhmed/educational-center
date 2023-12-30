import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Footer/Footer.css';
import {
  faFacebook,
  faYoutube,
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faMap, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../../asset/css/Bootstrap.min.css';

const Footer = () => {
  return (
    <>
      <Container fluid={true} className="footerSection">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center p-5">
            <h4 className="footerName">Follow Us</h4>
            <div className="social-container">
              <a className="social iconcolor" href="#">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a className="social iconcolor" href="#">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a className="social iconcolor" href="#">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a className="social iconcolor" href="#">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a className="social iconcolor" href="#">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} className="p-5">
            <h4 className="footerName text-center">Address</h4>

            <p className="footerDescription">
              <FontAwesomeIcon icon={faMap} /> KONYA, SELÇUKLU,FERİTPAŞA
              MAH,MÜFTÜ LOKMAN HEKİM SK.<br></br>
              <FontAwesomeIcon icon={faEnvelope} /> CTP1@gmail.com <br></br>
              <FontAwesomeIcon icon={faPhone} /> Phone : +90 555 016 7003
            </p>
          </Col>

          <Col lg={4} md={6} sm={12} className="p-5 text-justify">
            <h4 className="footerName">Information</h4>

            <a className="footerLink" href="">
              About Me
            </a>{' '}
            <br></br>
            <a className="footerLink" href="">
              Company Profile
            </a>{' '}
            <br></br>
            <a className="footerLink" href="">
              Contact Us
            </a>{' '}
            <br></br>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
