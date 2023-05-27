import { Container, Nav, Navbar } from "react-bootstrap";


function Header() {


    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">NAVBAR UTAMA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Pegawai</Nav.Link>
              <Nav.Link href="#link">Bagian</Nav.Link>
              <Nav.Link href="#link">Materi</Nav.Link>
              <Nav.Link href="#link">Absen</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
    
    }
    
    
    
    export default Header;
    