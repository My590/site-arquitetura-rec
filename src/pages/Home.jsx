import { Link } from 'react-router-dom';

import img1 from '../assets/predio1.png';
import img2 from '../assets/predio2.png';
import img3 from '../assets/predio3.png';
import img4 from '../assets/predio4.png';

import proj1 from '../assets/projeto1.png';
import proj2 from '../assets/projeto2.png';
import proj3 from '../assets/projeto3.png';
import proj4 from '../assets/projeto4.png';
import proj5 from '../assets/projeto5.png';

const Styles = {
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.6fr',
    alignItems: 'center',
    gap: '40px',
    padding: '40px 60px',
    minHeight: '70vh',
  },
  heroText: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleLight: {
    fontSize: '40px',
    fontWeight: '300',
    color: '#9a9a9a',
    margin: 0,
    textTransform: 'uppercase',
  },
  titleBold: {
    fontSize: '40px',
    fontWeight: '700',
    color: '#222',
    margin: 0,
  },
  arrows: {
    display: 'flex',
    gap: '16px',
    marginTop: '40px',
    color: '#777',
    fontSize: '18px',
    cursor: 'pointer',
  },
  heroImageWrapper: {
    position: 'relative', 
    height: '520px',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',     
    display: 'block',
  },
  viewButton: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    background: '#fff',
    padding: '14px 28px',
    fontSize: '10px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: '#333',
    textDecoration: 'none',
  },

  about: {
    background: '#f1f1f1',
    padding: '60px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1.2fr',
    gap: '30px',
    alignItems: 'start',
  },
  aboutLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  imgTall: {
    width: '100%',
    height: '320px',
    objectFit: 'cover',
  },
  imgSmall: {
    width: '60%',
    height: '120px',
    objectFit: 'cover',
  },
  aboutMiddle: {
    marginTop: '60px',   
  },
  imgMiddle: {
    width: '100%',
    height: '340px',
    objectFit: 'cover',
  },
  aboutTitle: {
    fontSize: '40px',
    fontWeight: '300',
    color: '#9a9a9a',
    margin: '0 0 20px',
  },
  aboutText: {
    fontSize: '12px',
    lineHeight: '1.8',
    color: '#555',
  },
  readMore: {
    display: 'inline-block',
    marginTop: '30px',
    padding: '12px 24px',
    background: '#fff',
    fontSize: '10px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: '#333',
    textDecoration: 'none',
  },
  projects: {
    padding: '60px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  projectsTitle: {
    fontSize: '40px',
    fontWeight: '300',
    color: '#9a9a9a',
    margin: '0 0 30px',
  },
  rowTop: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
    marginBottom: '15px',
  },
  rowBottom: {
    display: 'grid',
    gridTemplateColumns: '135fr 235fr 185fr',
    gap: '15px',
  },
  card: {
    position: 'relative',   
    height: '220px',
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  overlay: {
    position: 'absolute',
    inset: 0,              
    background: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    padding: '30px 40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '14px',
  },
  overlayTitle: {
    fontSize: '34px',
    fontWeight: '700',
    lineHeight: '1.05',
    margin: 0,
  },
  viewMore: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '10px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
  allWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '15px',
  },
  allButton: {
    background: '#333',
    color: '#fff',
    textDecoration: 'none',
    padding: '18px 36px',
    fontSize: '10px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
};

function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={Styles.hero}>
        <div style={Styles.heroText}>
          <h1 style={Styles.titleLight}>Projetos</h1>
          <h2 style={Styles.titleBold}>Origem</h2>

          <div style={Styles.arrows}>
            <p style={Styles.aboutText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          </div>
        </div>

        <div style={Styles.heroImageWrapper}>
          <img src={img1} alt="Projeto" style={Styles.heroImage} />
          <a href="/projetos" style={Styles.viewButton}>Ver projeto →</a>
        </div>
      </section>

      {/* ABOUT */}
      <section style={Styles.about}>
        <div style={Styles.aboutLeft}>
          <img src={img3} alt="" style={Styles.imgTall} />
          <img src={img4} alt="" style={Styles.imgSmall} />
        </div>

        <div style={Styles.aboutMiddle}>
          <img src={img2} alt="" style={Styles.imgMiddle} />
        </div>

        <div>
          <h2 style={Styles.aboutTitle}> Foco principal</h2>
          <p style={Styles.aboutText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <a href="/sobre" style={Styles.readMore}>Ler mais →</a>
        </div>

      </section>

      <section style={Styles.projects}>
        <h2 style={Styles.projectsTitle}> Nossos projetos</h2>

        <div style={Styles.rowTop}>
          <div style={Styles.card}>
            <img src={proj1} alt="Sample Project" style={Styles.cardImg} />
          </div>

          <div style={Styles.card}>
            <img src={proj2} alt="Projeto 2" style={Styles.cardImg} />
          </div>
        </div>

        <div style={Styles.rowBottom}>
          <div style={Styles.card}>
            <img src={proj3} alt="Projeto 3" style={Styles.cardImg} />
          </div>
          <div style={Styles.card}>
            <img src={proj4} alt="Projeto 4" style={Styles.cardImg} />
          </div>
          <div style={Styles.card}>
            <img src={proj5} alt="Projeto 5" style={Styles.cardImg} />
          </div>
        </div>

        <div style={Styles.allWrapper}>
          <Link to="/projetos" style={Styles.allButton}>Todos os projetos →</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;