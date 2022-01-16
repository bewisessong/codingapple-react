import logo from './logo.svg';
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data';
import Card from './Card';

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  /* 01/15(토) : import/export 사용하기 */
  let [shoes, setShoes] = useState(Data);
  
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

      {/* 01/16(일) : React Router 1 - 세팅과 기본 라우팅 */}
      <Route exact path="/">
        <div className="container-fluid text-light p-5">
          <div className="container p-5">
              <h1 className="display-4">20% Season Off</h1>
              <p>Go to My Website</p>
              <Button variant="primary">Learn more</Button>{' '}
          </div>
        </div>

        {/* 웹 화면에서는 가로로, 앱 화면에서는 세로로 보이게 하고싶을 때 row와 col 사용*/}
        <div className="container">
          <div className="row">
            {
              shoes.map((shoe, i)=> {
                return <Card shoes={shoe} index={i} />
              })
            }
          </div>
        </div>
      </Route>

      <Route path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> 
      </Route>
    </div>
  );
}

export default App;
