import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./TopNavigation.css";
import Logo from "../../asset/image/logo.png";
import LogoScroll from "../../asset/image/logo.png";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  const [navBarTitle, setNavBarTitle] = useState("navTitle");
  const [logo, setLogo] = useState([Logo]);
  const [navbarBack, setNavbarBack] = useState("navBackground");
  const [navbarItems, setNavbarItems] = useState("navItem");
  const [variant, setVariant] = useState("dark");

  const scrollHandler = () => {
    if (window.scrollY > 100) {
      setNavBarTitle("navTitleScroll");
      setLogo([LogoScroll]);
      setNavbarBack("navBackgroundScroll");
      setNavbarItems("navItemScroll");
      setVariant("dark");
    } else {
      setNavBarTitle("navTitle");
      setLogo([Logo]);
      setNavbarBack("navBackground");
      setNavbarItems("navItem");
      setVariant("dark");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    < >
      <Navbar fixed="top" collapseOnSelect expand="lg" className={`${navbarBack} pb-0`}>
        <Container>
        <Navbar.Brand href="/" className={navBarTitle}>
          {" "}
          <img src={logo} alt="Logo" width={50} height={50} /><span className="ps-2">EduMentor</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              {" "}
              <Link
                to="/"
                className={navbarItems}
                style={{
                  color: window.location.pathname === "/" ? "#f0ec2c" : "",
                }}
              >
                Home
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                to="/about"
                className={navbarItems}
                style={{
                  color: window.location.pathname === "/about" ? "#f0ec2c" : "",
                }}
              >
                About
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                to="/AllServices"
                className={navbarItems}
                style={{
                  color:
                    window.location.pathname === "/AllServices" ? "#f0ec2c" : "",
                }}
              >
                Services
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                to="/AllCourses"
                className={navbarItems}
                style={{
                  color:
                    window.location.pathname === "/AllCourses" ? "#f0ec2c" : "",
                }}
              >
                Courses
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                to="/AllProject"
                className={navbarItems}
                style={{
                  color:
                    window.location.pathname === "/AllProject" ? "#f0ec2c" : "",
                }}
              >
                Profolio
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                to="/contact"
                className={navbarItems}
                style={{
                  color:
                    window.location.pathname === "/contact" ? "#f0ec2c" : "",
                }}
              >
                Contact
              </Link>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavigation;
