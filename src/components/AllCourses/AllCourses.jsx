import React from 'react'
import c1 from '../../asset/image/course.jpg';
import c2 from '../../asset/image/course2.jpg';
import c3 from '../../asset/image/course3.jpg';
import c4 from '../../asset/image/course4.jpg';import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

export default function AllCourses() {
  return (
    <>
      <Container className="text-center">
        <h1 className="text-center serviceMainTitle">All Courses</h1>
        <div className="bottom"></div>
        <Row>
          <Col lg={6} md={6} sm={12} className="p-2">
            <Row>
              <Col lg={6} md={6} sm={12}>
                <img className="courseImg" src={c1} />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h4 className="text-justify serviceName">Medical Clinic</h4>
                <p className="text-justify serviceDescription">C sharp & Sql Server Full Professional Course.</p>
                <Link className="courseViewMore" to="/CourseDetailsPage">
                  View Details
                </Link>
              </Col>
            </Row>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <img className="courseImg" src={c2} />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h4 className="text-justify serviceName">Medical Clinic</h4>
                <p className="text-justify serviceDescription">C sharp & Sql Server Full Professional Course.</p>
                <Link className="courseViewMore" to="/CourseDetailsPage">
                  View Details
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={6} sm={12} className="p-2">
            <Row>
              <Col lg={6} md={6} sm={12}>
                <img className="courseImg" src={c3} />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h4 className="text-justify serviceName">Medical Clinic</h4>
                <p className="text-justify serviceDescription">C sharp & Sql Server Full Professional Course.</p>
                <Link className="courseViewMore" to="/CourseDetailsPage">
                  View Details
                </Link>
              </Col>
            </Row>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <img className="courseImg" src={c4} />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h4 className="text-justify serviceName">Medical Clinic</h4>
                <p className="text-justify serviceDescription">C sharp & Sql Server Full Professional Course.</p>
                <Link className="courseViewMore" to="/CourseDetailsPage">
                  View Details
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
