import logo from './logo.svg';
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data';

function App() {

  /* 01/15(토) : import/export 사용하기 */
  let [shoes, setShoes] = useState(Data);
  console.log(shoes);
  
  return (
    /* 01/15(토) : 쇼핑몰 레이아웃 디자인 */
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shoe shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container-fluid text-light p-5">
        <div className="container p-5">
            <h1 className="display-4">20% Season Off</h1>
            <p>Go to My Website</p>
            <Button variant="primary">Learn more</Button>{' '}
        </div>
      </div>

      {/* 웹 화면에서는 가로로, 앱 화면에서는 세로로 보이게 하고싶을 때 */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content} {shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content} {shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content} {shoes[2].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
