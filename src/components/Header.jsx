import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Styles = {
   header: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 60px',
  },

  logo: {
    height: '50px',
    width: 'auto',
  },

  nav: {
    display: 'flex',
    gap: '40px',
  },

  navLink: {
  textDecoration: 'none',
  color: '#333',
  fontSize: '11px',
  fontWeight: '400',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  paddingBottom: '4px',
  borderBottom: '1px solid transparent',
},
}

function Header() {
  return (
    <header style={Styles.header}>

      <img src={logo} alt="Logo"  style={Styles.logo}/>

      <nav style={Styles.nav}>
        <NavLink to="/" end style={Styles.navLink}>
          Home
        </NavLink>

        <NavLink to="/sobre" style={Styles.navLink}>
          Sobre
        </NavLink>

        <NavLink to="/projetos" style={Styles.navLink}>
          Projetos
        </NavLink>

        <NavLink to="/contato" style={Styles.navLink}>
          Contato
        </NavLink>
      </nav>

    </header>
  );
}

export default Header;