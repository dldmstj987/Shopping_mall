import { useState } from 'react'
import './App.css'
import {Button, Navbar, Container, Nav} from 'react-bootstrap'


function App() {

  return(
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">space;BAR</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">cart</Nav.Link>
        <Nav.Link href="#pricing"></Nav.Link>
      </Nav>
      </Container>
    </Navbar>

    <div className='main-bg'></div>

    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
      </div>

    </div>

    
  </div>
  )
}

export default App
