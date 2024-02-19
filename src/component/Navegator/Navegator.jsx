import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './Style.css'

const Navegator = () => {
    return(
        <>
          <Navbar bg="danger" data-bs-theme="danger">
            <Container>
              <Nav className="me-auto">
                <Link className="title" to="/"><img className="img-tlt" src='./src/assets/Home.png'/>Home</Link>
                <Link className="title" to="/Contacto"><img className="img-tlt" src='./src/assets/Contacto.png'/>Contacto</Link>
              </Nav>
              <Link className="title-name" to="/"><img className="img-name" src='./src/assets/cake.png'/>Happy Cake</Link>
            </Container>
          </Navbar>
        </>
    )
}

export default Navegator
