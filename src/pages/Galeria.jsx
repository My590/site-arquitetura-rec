import { Link } from 'react-router-dom';


const Styles = {
  page: {
    fontFamily: "'Roboto', sans-serif",
    background: '#fff',
    color: '#333',
  },

  about: {
    background: '#f1f1f1',
    padding: '70px 60px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1.2fr',
    gap: '30px',
    alignItems: 'start',
    minHeight: '600px',
  },

  aboutInfo: {
    paddingTop: '65px',
    paddingLeft: '10px',
  },

  aboutTitleLight: {
    fontSize: '44px',
    fontWeight: '300',
    color: '#9a9a9a',
    margin: '0 0 5px',
    lineHeight: '1.1',
  },
};

function Galeria() {
  return (
    <main style={Styles.page}>

      <section style={Styles.about}>
        <div style={Styles.aboutInfo}>
          <h1 style={Styles.aboutTitleLight}>
            Galeria
            de Fotos
          </h1>
        </div>
      </section>
    </main>
  );
}

export default Galeria;