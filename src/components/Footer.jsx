import { Link } from 'react-router-dom';
import logo from '../assets/footer-logo.png';

const Styles = {
  footer: {
    background: '#2b2b2b',
    color: '#fff',
    fontFamily: "'Roboto', sans-serif",
    padding: '60px 60px 0',
  },

  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1.6fr 1fr',
    gap: '40px',
    alignItems: 'start',
  },

  logo: {
    width: '130px',
    height: 'auto',
  },

  title: {
    fontSize: '13px',
    fontWeight: '700',
    margin: '0 0 24px',
  },

  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },

  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '11px',
    fontWeight: '500',
    letterSpacing: '0.5px',
  },

  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '36px',
  },

  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    fontSize: '11px',
    fontWeight: '500',
    lineHeight: '1.7',
    letterSpacing: '0.5px',
  },

  icon: {
    fontSize: '12px',
    opacity: 0.8,
  },

  social: {
    display: 'flex',
    gap: '24px',
  },

  socialLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '700',
  },

  bottom: {
    marginTop: '60px',
    borderTop: '1px solid #3a3a3a',
    padding: '24px 0',
    textAlign: 'center',
    fontSize: '10px',
    color: '#777',
    letterSpacing: '0.5px',
  },
};

function Footer() {
  return (
    <footer style={Styles.footer}>
      <div style={Styles.container}>
        <div>
          <img src={logo} alt="Digital Project" style={Styles.logo} />
        </div>

        <div>
          <h4 style={Styles.title}>Informações</h4>
          <ul style={Styles.list}>
            <li><Link to="/" style={Styles.link}>Home</Link></li>
            <li><Link to="/galeria" style={Styles.link}>Galeria</Link></li>
            <li><Link to="/projetos" style={Styles.link}>Projetos</Link></li>
            <li><Link to="/sobre" style={Styles.link}>Sobre</Link></li>
            <li><Link to="/contato" style={Styles.link}>Contatos</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={Styles.title}>Contatos</h4>
          <div style={Styles.contactList}>
            <div style={Styles.contactItem}>
              <span style={Styles.icon}>📍</span>
              <span>
                Rua dos Sonhos<br />
                13 - 4º andar<br />
              </span>
            </div>

            <div style={Styles.contactItem}>
              <span style={Styles.icon}>📞</span>
              <span>00 - xxx - xxxx</span>
            </div>

            <div style={Styles.contactItem}>
              <span style={Styles.icon}>✉️</span>
              <span>email@gmail.com</span>
            </div>
          </div>
        </div>

        <div>
          <h4 style={Styles.title}>Redes Sociais</h4>
          <div style={Styles.social}>
            <a href="#" style={Styles.socialLink}>f</a>
            <a href="#" style={Styles.socialLink}>t</a>
            <a href="#" style={Styles.socialLink}>in</a>
            <a href="#" style={Styles.socialLink}>p</a>
          </div>
        </div>
      </div>

      <div style={Styles.bottom}>© 2026 Todos os direitos reservados</div>
    </footer>
  );
}

export default Footer;