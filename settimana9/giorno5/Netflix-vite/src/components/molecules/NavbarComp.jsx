import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DropButton from "../atoms/DropButtonComp";

function NavbarComp() {
  return (
    <>
      <Navbar expand="sm" className="bg-black">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src="../src/assets/netflix_logo.png"
              height="60"
              className="d-inline-block align-top ms-4"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white fs-5 mx-2" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white fs-5 mx-2" href="#link">
                Tv Shows
              </Nav.Link>
              <Nav.Link className="text-white fs-5 mx-2" href="#link">
                Movies
              </Nav.Link>
              <Nav.Link className="text-white fs-5 mx-2" href="#link">
                Recently Added
              </Nav.Link>
              <Nav.Link className="text-white fs-5 mx-2" href="#link">
                My List
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="d-flex justify-content-end me-4">
          <img
            className="mx-3"
            height="25"
            src="../src/assets/magnifying-glass-solid.svg"
            alt=""
          />

          <img
            className="ms-2"
            height="25"
            src="../src/assets/bell-solid.svg"
            alt="bell icon"
          />
        </div>
        <DropButton />
      </Navbar>
    </>
  );
}

export default NavbarComp;
