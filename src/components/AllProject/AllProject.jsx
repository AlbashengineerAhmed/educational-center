import React, { Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import P1 from '../../asset/image/project.jpg';
import P2 from '../../asset/image/project2.jpg';
import P3 from '../../asset/image/project3.jpg';
import { Link } from 'react-router-dom';

export default function AllProject() {
  return (
    <Fragment>
    <Container className="text-center">
        <h1 className="text-center serviceMainTitle"> All Project</h1>
        <div className="bottom"></div>
        <Row>
            <Col lg={4} md={6} sm={12}>
                <Card className="projectCard">
                    <Card.Img variant="top" src={P1} />
                    <Card.Body>
                        <Card.Title className="projectName">Card Title</Card.Title>
                        <Card.Text className="projectDescription">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Link to="/ProjectDetailsPage">
                            <Button variant="primary">More </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

            <Col lg={4} md={6} sm={12}>
                <Card className="projectCard">
                    <Card.Img variant="top" src={P2} />
                    <Card.Body>
                        <Card.Title className="projectName">Card Title</Card.Title>
                        <Card.Text className="projectDescription">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Link to="/ProjectDetailsPage">
                            <Button variant="primary">More </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

            <Col lg={4} md={6} sm={12}>
                <Card className="projectCard">
                    <Card.Img variant="top" src={P3} />
                    <Card.Body>
                        <Card.Title className="projectName">Card Title</Card.Title>
                        <Card.Text className="projectDescription">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Link to="/ProjectDetailsPage">
                            <Button variant="primary">More </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
</Fragment>
  )
}
