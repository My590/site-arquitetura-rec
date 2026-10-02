import { useState } from 'react';
import fotoContato from '../assets/contato.png';

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

  button: {
    display: 'inline-block',
    alignSelf: 'flex-start',
    marginTop: '30px',
    padding: '22px 36px',
    background: '#333',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '9px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
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
    /* ---------- FORMULÁRIO ---------- */
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

function Contato() {
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
      <section style={Styles.page}>
        <div style={Styles.info}>
          <h1 style={Styles.titleLight}>Informações de</h1>
          <h2 style={Styles.titleBold}>Contato</h2>

          <p style={Styles.companyName}>Nome da Companhia</p>
          <p style={Styles.address}> Rua dos Sonhos, 13 - 4° andar</p>
          <p style={Styles.phone}> 00-xxxx-xxxx</p>
          <p style={Styles.email}>email@gmail.com</p>

        </div>

        <div style={Styles.mapWrapper}>
          <iframe
            title="Mapa"
            src="https://www.google.com/maps?q=Austin,+Texas&output=embed"
            style={Styles.map}
            loading="lazy"
          />
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section style={Styles.formSection}>
        <div style={Styles.formColumn}>
          <h2 style={Styles.formTitle}>Envie uma mensagem</h2>

          <form style={Styles.form} onSubmit={handleSubmit}>
            <label style={Styles.field}>
              <span style={Styles.label}>
                Nome<span style={Styles.required}>*</span>
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
                Número do Telefone<span style={Styles.required}>*</span>
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
              <span style={Styles.label}>Interessado em</span>
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
                mensagem<span style={Styles.required}>*</span>
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
              Envie um e-mail →
            </button>
          </form>
        </div>

        <div style={Styles.photoWrapper}>
          <img src={fotoContato} alt="Contato" style={Styles.photo} />
        </div>
      </section>
    </main>
  );
}

export default Contato;