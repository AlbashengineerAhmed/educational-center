import React, { useState, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Chart/Chart.css';
import '../../asset/css/Bootstrap.min.css';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Chart = () => {
  const [data, setData] = useState([
    { X: 'JavaScript', Y: 100 },
    { X: 'C++', Y: 65 },
    { X: 'HTML', Y: 100 },
    { X: 'Bootstrap', Y: 40 },
    { X: 'CSS', Y: 100 },
    { X: 'NextJs', Y: 80 },
  ]);

  return (
    <Fragment>
      <Container>
        <h1 className="text-center serviceMainTitle"> TECHNOLOGY USED</h1>
        <div className="bottom"></div>
        <Row>
          <Col style={{ width: '100%', height: '300px',marginBottom:'5px'}} lg={6} md={12} sm={12}>
            <h4 className="text-center">Experiences</h4>
            <ResponsiveContainer>
              <BarChart width={150} height={40} data={data}>
                <XAxis dataKey="X" />
                <Tooltip />
                <Bar dataKey="Y" fill="#051b35" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <p className="text-justify chartDescription">
              Hi! I'm Nizar Damiriyye. I'm a Computer Engineer & developer with
              a serious love for teaching I am a founder of Creative Team
              Programming (C.T.P) and a Programmer & Instructor.<br></br> <br></br>
              I am working online for the last 5 years and have created several
              successful websites running on the internet. I try to create a
              project-based course that helps you to learn professionally and
              makes you feel as a complete developer. Creative Team Programming
              exists to help you succeed in life.<br></br> <br></br> Each course
              has been hand-tailored to teach a specific skill. I hope you
              agree! Whether you’re trying to learn a new skill from scratch or
              want to refresh your memory on something you’ve learned in the
              past, you’ve come to the right place. <br></br> <br></br>
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Chart;
