//Nav.js component, to return a navigation for header section
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Note from '../assets/Images/note.svg'

const Nav = () => {
  //when user clicks a menu link or the element lost focus within the nav menu, close it
  
  function navDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classNameList.contains('show')) {
          openDropdown.classNameList.remove('show');
        }
      }
    }
  }

  return (
    <>
    <nav className="main__nav">
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
      <nav className='nav__dropdown'>
        <div className="dropdown">
          <button onClick={navDrop} className="dropbtn"></button>
          <div id="myDropdown" className="dropdown-content">
            <ul>
              <li>
                <NavLink to="/" className="nav-link" onClick={navDrop}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/work" className="nav-link" onClick={navDrop}>
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link" onClick={navDrop}>
                  About
                </NavLink>
              </li>
              <li>
                <HashLink to="#contact" smooth className="nav-link" onClick={navDrop}>
                  Contact
                </HashLink>
              </li>
              <li>
                <i class='bx bx-moon change-theme' id="theme-button" onClick={navDrop}></i>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </nav>
    </>
  );
};

export default Nav;