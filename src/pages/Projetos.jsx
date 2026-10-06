import { useState } from 'react';
import { Link } from 'react-router-dom';

const projetos = [
  {
    id: '1',
    title: 'Villa Verde Residence',
    subtitle: 'Residential Architecture • São Paulo, SP',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    link: '/projetos/1',
  },
  {
    id: '2',
    title: 'Horizon Commercial Building',
    subtitle: 'Corporate Architecture • Alphaville, SP',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    link: '/projetos/2',
  },
];

const PER_PAGE = 3;

const Styles = {
  page: {
    fontFamily: "'Roboto', sans-serif",
    padding: '40px 60px 60px',
    maxWidth: '1200px',
    margin: '0 auto',
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

  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },

  row: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    alignItems: 'stretch',
  },

  image: {
    width: '100%',
    height: '100%',
    minHeight: '280px',
    objectFit: 'cover',
    display: 'block',
  },

  card: {
    background: '#f4f4f4',
    padding: '40px 36px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  cardTitle: {
    fontSize: '24px',
    fontWeight: '300',
    color: '#aaa',
    margin: '0 0 6px',
  },

  cardSubtitle: {
    fontSize: '10px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#999',
    margin: '0 0 20px',
  },

  cardText: {
    fontSize: '11px',
    lineHeight: '1.8',
    color: '#555',
    margin: '0 0 30px',
  },

  viewButton: {
    alignSelf: 'flex-start',
    padding: '14px 28px',
    border: '1px solid #ccc',
    background: '#fff',
    color: '#333',
    textDecoration: 'none',
    fontSize: '9px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },

  pagination: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginTop: '40px',
    fontSize: '11px',
    letterSpacing: '1px',
    color: '#777',
  },

  pageNumber: {
    fontWeight: '700',
    color: '#333',
  },

  arrowButton: {
    width: '34px',
    height: '34px',
    border: '1px solid #ccc',
    background: '#fff',
    color: '#333',
    fontSize: '14px',
    cursor: 'pointer',
  },

  arrowDisabled: {
    opacity: 0.35,
    cursor: 'default',
  },
};

const pad = (n) => String(n).padStart(2, '0');

function Projetos() {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(projetos.length / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const visible = projetos.slice(start, start + PER_PAGE);

  const isFirst = page === 1;
  const isLast = page === totalPages;

  return (
    <section style={Styles.page}>
      <h1 style={Styles.titleLight}>Our</h1>
      <h2 style={Styles.titleBold}>Projects</h2>

      <div style={Styles.list}>
        {visible.map((projeto) => (
          <article key={projeto.id} style={Styles.row}>
            <img
              src={projeto.image}
              alt={projeto.title}
              style={Styles.image}
            />

            <div style={Styles.card}>
              <h3 style={Styles.cardTitle}>{projeto.title}</h3>
              <p style={Styles.cardSubtitle}>{projeto.subtitle}</p>
              <p style={Styles.cardText}>{projeto.description}</p>

              <Link to={projeto.link} style={Styles.viewButton}>
                View more →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div style={Styles.pagination}>
        <span>
          <span style={Styles.pageNumber}>{pad(page)}</span> / {pad(totalPages)}
        </span>

        <button
          type="button"
          style={{ ...Styles.arrowButton, ...(isFirst ? Styles.arrowDisabled : {}) }}
          onClick={() => setPage(page - 1)}
          disabled={isFirst}
          aria-label="Previous page"
        >
          ←
        </button>

        <button
          type="button"
          style={{ ...Styles.arrowButton, ...(isLast ? Styles.arrowDisabled : {}) }}
          onClick={() => setPage(page + 1)}
          disabled={isLast}
          aria-label="Next page"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default Projetos;