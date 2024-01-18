import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DropButton from "../atoms/DropButtonComp";
import { Link } from "react-router-dom";

function NavbarComp() {
  
  return (
    <>
      <Navbar expand="sm" className="bg-black">
        <Container fluid>
          <Navbar.Brand>
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
              <Link to='/' className="text-white fs-5 mx-2" href="#home">
                Home
              </Link>
              <Link to='/tv-shows' className="text-white fs-5 mx-2" href="#link">
                Tv Shows
              </Link>
              <Link to='/movies' className="text-white fs-5 mx-2" href="#link">
                Movies
              </Link>
              <Link to='/recently-added' className="text-white fs-5 mx-2" href="#link">
                Recently Added
              </Link>
              <Link to='/my-list' className="text-white fs-5 mx-2" href="#link">
                My List
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="d-flex justify-content-end me-4">
          <input type="text" />
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
