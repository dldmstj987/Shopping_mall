import { useState } from 'react'
import './App.css'
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import data from './data.js';



function App() {
  let [shoes] = useState(data)

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
      <Card shoes={shoes[0]} i={1}/>
      <Card shoes={shoes[1]} i ={2}/>
      <Card shoes={shoes[2]} i={3}/>
    </div>
  </div>
  )
}
function Card(props) {
  return(
    <div className="col-md-4">
     <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{props.shoes.tilte}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App
