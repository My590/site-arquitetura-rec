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

import { useState } from 'react';
import fotoContato from '../assets/contato.png';

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

  formSection: {
    fontFamily: "'Roboto', sans-serif",
    display: 'grid',
    gridTemplateColumns: '1fr 1.7fr',
    gap: '15px',
    padding: '0 60px 80px',
    maxWidth: '1200px',
    margin: '0 auto',
  },

  formColumn: {
    display: 'flex',
    flexDirection: 'column',
  },

  formTitle: {
    fontSize: '44px',
    fontWeight: '300',
    color: '#9a9a9a',
    margin: '0 0 20px',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  field: {
    background: '#efefef',
    padding: '10px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },

  label: {
    fontSize: '9px',
    letterSpacing: '0.5px',
    color: '#777',
  },

  required: {
    color: '#d33',
  },

  input: {
    border: 'none',
    background: 'transparent',
    outline: 'none',
    fontFamily: "'Roboto', sans-serif",
    fontSize: '12px',
    color: '#333',
    width: '100%',
  },

  textarea: {
    border: 'none',
    background: 'transparent',
    outline: 'none',
    fontFamily: "'Roboto', sans-serif",
    fontSize: '12px',
    color: '#333',
    width: '100%',
    height: '70px',
    resize: 'none',
  },

  sendButton: {
    alignSelf: 'flex-start',
    marginTop: '40px',
    padding: '22px 36px',
    background: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontFamily: "'Roboto', sans-serif",
    fontSize: '9px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },

  photoWrapper: {
    height: '295px',
    alignSelf: 'end',
    marginBottom: '104px',
  },

  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'right',
    display: 'block',
  },
};

function Home() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <main>
      <section style={Styles.hero}>
        <div style={Styles.heroText}>
          <h1 style={Styles.titleLight}>Projects</h1>
          <h2 style={Styles.titleBold}>Origin</h2>

          <div style={Styles.arrows}>
            <p style={Styles.aboutText}>
              Every architecture begins with an idea, but it gains meaning when it meets its context. We create projects that start from the essence of each space to turn needs into experiences, combining identity, functionality and expression.
            </p>
          </div>
        </div>

        <div style={Styles.heroImageWrapper}>
          <img src={img1} alt="Project" style={Styles.heroImage} />
          <a href="/projetos" style={Styles.viewButton}>View project →</a>
        </div>
      </section>

      <section style={Styles.about}>
        <div style={Styles.aboutLeft}>
          <img src={img3} alt="" style={Styles.imgTall} />
          <img src={img4} alt="" style={Styles.imgSmall} />
        </div>

        <div style={Styles.aboutMiddle}>
          <img src={img2} alt="" style={Styles.imgMiddle} />
        </div>

        <div>
          <h2 style={Styles.aboutTitle}>Main focus</h2>
          <p style={Styles.aboutText}>
            Creating spaces that make sense to the people who live in them. Our focus is on the relationship between architecture, people and context, seeking solutions that balance aesthetics, comfort and functionality.
          </p>
          <a href="/sobre" style={Styles.readMore}>Read more →</a>
        </div>
      </section>

      <section style={Styles.projects}>
        <h2 style={Styles.projectsTitle}>Our projects</h2>

        <div style={Styles.rowTop}>
          <div style={Styles.card}>
            <img src={proj1} alt="Sample Project" style={Styles.cardImg} />
          </div>

          <div style={Styles.card}>
            <img src={proj2} alt="Project 2" style={Styles.cardImg} />
          </div>
        </div>

        <div style={Styles.rowBottom}>
          <div style={Styles.card}>
            <img src={proj3} alt="Project 3" style={Styles.cardImg} />
          </div>
          <div style={Styles.card}>
            <img src={proj4} alt="Project 4" style={Styles.cardImg} />
          </div>
          <div style={Styles.card}>
            <img src={proj5} alt="Project 5" style={Styles.cardImg} />
          </div>
        </div>

        <div style={Styles.allWrapper}>
          <Link to="/projetos" style={Styles.allButton}>All projects →</Link>
        </div>
      </section>

      <section style={Styles.formSection}>
        <div style={Styles.formColumn}>
          <h2 style={Styles.formTitle}>Send a message</h2>

          <form style={Styles.form} onSubmit={handleSubmit}>
            <label style={Styles.field}>
              <span style={Styles.label}>
                Name<span style={Styles.required}>*</span>
              </span>
              <input
                style={Styles.input}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </label>

            <label style={Styles.field}>
              <span style={Styles.label}>
                Phone Number<span style={Styles.required}>*</span>
              </span>
              <input
                style={Styles.input}
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </label>

            <label style={Styles.field}>
              <span style={Styles.label}>
                E-mail<span style={Styles.required}>*</span>
              </span>
              <input
                style={Styles.input}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label style={Styles.field}>
              <span style={Styles.label}>Interested in</span>
              <input
                style={Styles.input}
                type="text"
                name="interest"
                value={form.interest}
                onChange={handleChange}
              />
            </label>

            <label style={Styles.field}>
              <span style={Styles.label}>
                Message<span style={Styles.required}>*</span>
              </span>
              <textarea
                style={Styles.textarea}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" style={Styles.sendButton}>
              Send an e-mail →
            </button>
          </form>
        </div>

        <div style={Styles.photoWrapper}>
          <img src={fotoContato} alt="Contact" style={Styles.photo} />
        </div>
      </section>
    </main>
  );
}

export default Home;