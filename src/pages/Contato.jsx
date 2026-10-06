import { Link } from 'react-router-dom';

const Styles = {
  page: {
    fontFamily: "'Roboto', sans-serif",
    display: 'grid',
    gridTemplateColumns: '1fr 1.7fr',
    gap: '60px',
    alignItems: 'center',
    padding: '60px',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '70vh',
  },

  info: {
    display: 'flex',
    flexDirection: 'column',
  },

  titleLight: {
    fontSize: '44px',
    fontWeight: '300',
    color: '#9a9a9a',
    margin: 0,
    lineHeight: '1.1',
  },

  titleBold: {
    fontSize: '44px',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 40px',
    lineHeight: '1.1',
  },

  companyName: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#222',
    margin: '0 0 6px',
  },

  address: {
    fontSize: '11px',
    fontWeight: '400',
    color: '#555',
    margin: 0,
  },

  phone: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#222',
    margin: '36px 0 0',
  },

  email: {
    fontSize: '11px',
    fontWeight: '400',
    color: '#555',
    margin: '36px 0 0',
  },

  contactButton: {
    display: 'inline-block',
    alignSelf: 'flex-start',
    marginTop: '30px',
    padding: '16px 48px',
    background: 'rgba(40, 40, 40, 0.9)',
    color: '#fff',
    textDecoration: 'none',
    fontFamily: "'Roboto', sans-serif",
    fontSize: '9px',
    fontWeight: '400',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textAlign: 'center',
    border: 'none',
    cursor: 'pointer',
  },

  mapWrapper: {
    border: '1px solid #999',
    height: '250px',
  },

  map: {
    width: '100%',
    height: '100%',
    border: 0,
    display: 'block',
  },
};

function Contato() {
  return (
    <main>
      <section style={Styles.page}>
        <div style={Styles.info}>
          <h1 style={Styles.titleLight}>Contact</h1>
          <h2 style={Styles.titleBold}>Information</h2>

          <p style={Styles.companyName}>Company Name</p>
          <p style={Styles.address}>13 Dream Street, 4th floor</p>
          <p style={Styles.phone}>00-xxxx-xxxx</p>
          <p style={Styles.email}>email@gmail.com</p>

          <Link to="/contato" style={Styles.contactButton}>
            Contact us
          </Link>
        </div>

        <div style={Styles.mapWrapper}>
          <iframe
            title="Map"
            src="https://www.google.com/maps?q=Austin,+Texas&output=embed"
            style={Styles.map}
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}

export default Contato;