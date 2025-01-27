import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar
      bg="white"
      expand="lg"
      className="sticky-top shadow-sm border-bottom"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-success"
          >
            <path d="m15 11-1 9"></path>
            <path d="m19 11-4-7"></path>
            <path d="M2 11h20"></path>
            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"></path>
            <path d="M4.5 15.5h15"></path>
            <path d="m5 11 4-7"></path>
            <path d="m9 11 1 9"></path>
          </svg>
          <span className="ml-2 text-xl fw-bold text-dark">GrocerySave</span>
        </Navbar.Brand>

        {/* Right Links */}
        <Nav className="ms-auto align-items-center">
          <Button
            href="/SignIn"
            className="btn  btn-light me-2"
             onClick={() => navigate("/SignIn")}
          >
            Sign in
          </Button>
          <Button href="/Signup" variant="success"
          onClick={() => navigate("/SignUp")}>
            Sign up
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
