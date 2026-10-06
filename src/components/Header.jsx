import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Styles = {
  header: {
    fontFamily: "'Roboto', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 60px',
  },

  logo: {
    height: '40px',
    width: 'auto',
    display: 'block',
  },

  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '36px',
  },

  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '10px',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    padding: '6px 10px',
    borderTop: '1px solid transparent',
    borderBottom: '1px solid transparent',
  },

  navLinkActive: {
    borderTop: '1px solid #333',
    borderBottom: '1px solid #333',
  },
};

function getLinkStyle({ isActive }) {
  return isActive
    ? { ...Styles.navLink, ...Styles.navLinkActive }
    : Styles.navLink;
}

function Header() {
  return (
    <header style={Styles.header}>
      <Link to="/">
        <img src={logo} alt="Logo" style={Styles.logo} />
      </Link>

      <nav style={Styles.nav}>
        <NavLink to="/" end style={getLinkStyle}>
          Main
        </NavLink>

        <NavLink to="/galeria" style={getLinkStyle}>
          Gallery
        </NavLink>

        <NavLink to="/sobre" style={getLinkStyle}>
          About
        </NavLink>

        <NavLink to="/projetos" style={getLinkStyle}>
          Projects
        </NavLink>

        <NavLink to="/contato" style={getLinkStyle}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;