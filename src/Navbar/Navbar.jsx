import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBarMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink
        className={'nav-link'}
        to="/">
           Home 
        </NavLink>
        <NavLink
        className={'nav-link'}
        to="/about">
           About 
        </NavLink>
        <NavLink
        className={'nav-link'}
        to="/login">
           Login 
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default NavBarMenu;