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
            alt="Projeto arquitetônico"
            style={Styles.imgTall}
          />

          <img
            src={img4}
            alt="Detalhe arquitetônico"
            style={Styles.imgSmall}
          />
        </div>

        <div style={Styles.aboutMiddle}>
          <img
            src={img2}
            alt="Arquitetura contemporânea"
            style={Styles.imgMiddle}
          />
        </div>

        <div style={Styles.aboutInfo}>
          <h1 style={Styles.aboutTitleLight}>
            Sobre
          </h1>

          <h2 style={Styles.aboutTitleBold}>
            Nós
          </h2>

          <p style={Styles.aboutText}>
            Somos um escritório de arquitetura dedicado à criação de espaços
            que unem estética, funcionalidade e identidade. Desenvolvemos
            projetos pensando na relação entre as pessoas, os ambientes e
            suas necessidades.
          </p>

          <p style={{ ...Styles.aboutText, marginTop: '20px' }}>
            Acreditamos que cada projeto possui uma história própria. Por isso,
            buscamos soluções arquitetônicas que valorizem o contexto, os
            detalhes e a experiência de quem utiliza cada espaço.
          </p>
        </div>

      </section>

      <section style={Styles.mission}>

        <h2 style={Styles.missionTitle}>
          Foco principal / Missão
        </h2>

        <div style={Styles.missionGrid}>

          <div style={Styles.missionItem}>
            <p style={Styles.missionNumber}>1</p>

            <div style={Styles.missionContent}>
              <h3 style={Styles.missionItemTitle}>
                Arquitetura com propósito
              </h3>

              <p style={Styles.missionText}>
                Criar espaços que sejam visualmente marcantes, funcionais e
                capazes de atender às necessidades de seus usuários. Cada
                decisão de projeto busca equilibrar beleza, conforto e
                praticidade.
              </p>
            </div>
          </div>

          <div style={Styles.missionItem}>
            <p style={Styles.missionNumber}>2</p>

            <div style={Styles.missionContent}>
              <h3 style={Styles.missionItemTitle}>
                Inovação e qualidade
              </h3>

              <p style={Styles.missionText}>
                Buscar novas possibilidades para a arquitetura, utilizando
                soluções criativas e materiais adequados para desenvolver
                projetos duradouros, eficientes e conectados ao seu contexto.
              </p>
            </div>
          </div>

        </div>

      </section>

      <section style={Styles.finalSection}>

        <div style={Styles.finalContent}>

          <h2 style={Styles.finalTitle}>
            Espaços que
            <br />
            fazem sentido.
          </h2>

          <div>
            <p style={Styles.finalText}>
              Nosso objetivo é transformar ideias em ambientes que tenham
              significado. Trabalhamos para que cada projeto tenha sua própria
              identidade e, ao mesmo tempo, proporcione uma experiência
              agradável para quem o utiliza.
            </p>

            <Link to="/projetos" style={Styles.backButton}>
              Conheça nossos projetos →
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Sobre;