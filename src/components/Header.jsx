import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">BARBEARIA ESTILO</Link>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/servicos">Serviços</NavLink>
        <NavLink to="/agendamento">Agendamento</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
      <Link to="/agendamento" className="btn btn-small">Agendar agora</Link>
    </header>
  );
}

export default Header;