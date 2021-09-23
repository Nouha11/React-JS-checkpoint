import './App.css';
import React from "react";
import { Navbar, Nav, Container,Form,Button,Row,Col,Dropdown,DropdownButton} from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Navbar bg="primary" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="#home">Insciption</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
  <Form>

    <Container>

      <Form.Group className="mb-3" controlId="Name">
      <Row>
        <Col><Form.Label>First Name</Form.Label></Col>
        <Col><Form.Label>Last Name</Form.Label></Col>
        </Row>
        <Row>
        <Col><Form.Control type="text" placeholder="First Name" /></Col>
        <Col><Form.Control type="text" placeholder="Last Name" /></Col>
        
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Grade">
      <Row>
        <Col xs={1}><Form.Label>Grade:</Form.Label></Col>
        <Col>
        <DropdownButton variant="light" id="dropdown-basic-button" title="Select Grade:">
            <Dropdown.Item href="#/action-1">1st Grade</Dropdown.Item>
            <Dropdown.Item href="#/action-2">2nd Grade</Dropdown.Item>
            <Dropdown.Item href="#/action-3">3rd Grade</Dropdown.Item>
        </DropdownButton>
      </Col>
      </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="CIN">
      
        <Col><Form.Label>CIN:</Form.Label></Col>
        <Col>
        <Col ><Form.Control type="text" placeholder="Exp:12345678" /></Col>
        
      </Col>
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        
        <Form.Label>Phone Number</Form.Label>
        <Col><Form.Control type="text" placeholder="Enter Phone Number" /></Col>

      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        
        <Form.Label>Email address</Form.Label>
        <Col ><Form.Control type="Email" placeholder="Enter email" /></Col>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        
        <Form.Label>Password</Form.Label>
        <Col ><Form.Control type="password" placeholder="Password" /></Col>
      </Form.Group>

      <Form.Group className="mb-3" controlId="adresse">
        
        <Form.Label>Adresse</Form.Label>
        <Form.Control type="text" placeholder="Street Adresse" />
        <Form.Control type="text" placeholder="Apartment,suite,etc" />
        <Row>
        <Col><Form.Control type="text" placeholder="City" /></Col>
        <Col><Form.Control type="text" placeholder="State" /></Col>
        </Row>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      </Container>
  </Form>

  <footer>
  <div class="text-center p-4" >
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="*">Cetain School.com</a>
  </div>
  </footer>
  </div>

  )
 
}
export default App;
