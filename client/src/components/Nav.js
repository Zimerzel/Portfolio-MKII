//Nav.js component, to return a navigation for header section
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Nav = ({ handleShowHide }) => {
  //when user clicks a menu link or the element lost focus within the nav menu, close it
  const closeNav = (e) => {
    if (window.innerWidth < 576) {
      handleShowHide();
    } else {
      e.target.blur();
    }
  };

  return (
    <nav onClick={closeNav} className="main-nav">
      <ul>
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className="nav-link">
            Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <HashLink to="#contact" smooth className="nav-link">
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;