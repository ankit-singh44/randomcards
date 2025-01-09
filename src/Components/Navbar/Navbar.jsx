import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp({logouts}) {

    function onLogoutClick(e){
        e.preventDefault();
        logouts();
    }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <button onClick={onLogoutClick} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Logout</button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;