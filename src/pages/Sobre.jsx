import { Link } from 'react-router-dom';

import img2 from '../assets/predio2.png';
import img3 from '../assets/predio3.png';
import img4 from '../assets/predio4.png';

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

  aboutLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },

  imgTall: {
    width: '100%',
    height: '360px',
    objectFit: 'cover',
    display: 'block',
  },

  imgSmall: {
    width: '65%',
    height: '130px',
    objectFit: 'cover',
    display: 'block',
  },

  aboutMiddle: {
    marginTop: '65px',
  },

  imgMiddle: {
    width: '100%',
    height: '380px',
    objectFit: 'cover',
    display: 'block',
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

  aboutTitleBold: {
    fontSize: '44px',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 30px',
    lineHeight: '1.1',
  },

  aboutText: {
    fontSize: '12px',
    lineHeight: '1.8',
    color: '#555',
    maxWidth: '360px',
    margin: 0,
    textAlign: 'justify',
  },

  mission: {
    padding: '70px 60px',
    maxWidth: '1100px',
    margin: '0 auto',
  },

  missionTitle: {
    fontSize: '40px',
    fontWeight: '300',
    color: '#9a9a9a',
    margin: '0 0 45px',
    lineHeight: '1.1',
  },

  missionGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
  },

  missionItem: {
    display: 'grid',
    gridTemplateColumns: '70px 1fr',
    gap: '20px',
    alignItems: 'start',
  },

  missionNumber: {
    fontSize: '58px',
    fontWeight: '700',
    color: '#eeeeee',
    lineHeight: '0.9',
    margin: 0,
  },

  missionContent: {
    paddingTop: '3px',
  },

  missionItemTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 15px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },

  missionText: {
    fontSize: '12px',
    lineHeight: '1.8',
    color: '#666',
    margin: 0,
  },

  finalSection: {
    background: '#f1f1f1',
    padding: '70px 60px',
  },

  finalContent: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'center',
  },

  finalTitle: {
    fontSize: '40px',
    fontWeight: '300',
    color: '#9a9a9a',
    margin: 0,
    lineHeight: '1.15',
  },

  finalText: {
    fontSize: '12px',
    lineHeight: '1.9',
    color: '#555',
    margin: 0,
  },

  backButton: {
    display: 'inline-block',
    marginTop: '35px',
    padding: '16px 30px',
    background: '#333',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '9px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
};

function Sobre() {
  return (
    <main style={Styles.page}>

      <section style={Styles.about}>

        <div style={Styles.aboutLeft}>
          <img
            src={img3}
            alt="Architectural project"
            style={Styles.imgTall}
          />

          <img
            src={img4}
            alt="Architectural detail"
            style={Styles.imgSmall}
          />
        </div>

        <div style={Styles.aboutMiddle}>
          <img
            src={img2}
            alt="Contemporary architecture"
            style={Styles.imgMiddle}
          />
        </div>

        <div style={Styles.aboutInfo}>
          <h1 style={Styles.aboutTitleLight}>
            About
          </h1>

          <h2 style={Styles.aboutTitleBold}>
            Us
          </h2>

          <p style={Styles.aboutText}>
            We are an architecture firm dedicated to creating spaces that
            combine aesthetics, functionality and identity. We develop
            projects with a focus on the relationship between people, their
            environments and their needs.
          </p>

          <p style={{ ...Styles.aboutText, marginTop: '20px' }}>
            We believe every project has a story of its own. That is why we
            seek architectural solutions that value context, details and the
            experience of those who use each space.
          </p>
        </div>

      </section>

      <section style={Styles.mission}>

        <h2 style={Styles.missionTitle}>
          Main Focus / Mission
        </h2>

        <div style={Styles.missionGrid}>

          <div style={Styles.missionItem}>
            <p style={Styles.missionNumber}>1</p>

            <div style={Styles.missionContent}>
              <h3 style={Styles.missionItemTitle}>
                Architecture with purpose
              </h3>

              <p style={Styles.missionText}>
                Creating spaces that are visually striking, functional and
                able to meet the needs of their users. Every design decision
                seeks to balance beauty, comfort and practicality.
              </p>
            </div>
          </div>

          <div style={Styles.missionItem}>
            <p style={Styles.missionNumber}>2</p>

            <div style={Styles.missionContent}>
              <h3 style={Styles.missionItemTitle}>
                Innovation and quality
              </h3>

              <p style={Styles.missionText}>
                Seeking new possibilities for architecture, using creative
                solutions and suitable materials to develop lasting,
                efficient projects connected to their context.
              </p>
            </div>
          </div>

        </div>

      </section>

      <section style={Styles.finalSection}>

        <div style={Styles.finalContent}>

          <h2 style={Styles.finalTitle}>
            Spaces that
            <br />
            make sense.
          </h2>

          <div>
            <p style={Styles.finalText}>
              Our goal is to turn ideas into environments that carry meaning.
              We work so that each project has its own identity while also
              providing a pleasant experience for those who use it.
            </p>

            <Link to="/projetos" style={Styles.backButton}>
              Discover our projects →
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Sobre;