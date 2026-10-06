import img2 from '../assets/galeria2.png';
import img3 from '../assets/galeria3.png';
import img4 from '../assets/galeria4.png';
import img5 from '../assets/galeria5.png';
import img6 from '../assets/galeria6.png';
import img7 from '../assets/galeria7.png';
import img8 from '../assets/galeria8.png';
import img9 from '../assets/galeria9.png';
import img10 from '../assets/galeria10.png';


const Styles = {
  page: {
    background: '#fff',
    color: '#333',
    fontFamily: "'Roboto', sans-serif",
    minHeight: '100vh',
  },

  content: {
    maxWidth: '1130px',
    margin: '0 auto',
    padding: '70px 0 90px',
  },

  title: {
    margin: 0,
    lineHeight: '0.95',
  },

  titleLight: {
    display: 'block',
    fontSize: '48px',
    fontWeight: '300',
    color: '#b5b5b5',
    letterSpacing: '-1.5px',
  },

  titleBold: {
    display: 'block',
    fontSize: '48px',
    fontWeight: '700',
    color: '#222',
    letterSpacing: '-1.5px',
  },

  line: {
    width: '100%',
    height: '1px',
    background: '#eeeeee',
    marginTop: '45px',
    marginBottom: '25px',
  },

  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '22px',
  },

  imageWrapper: {
    width: '100%',
    height: '208px',
    overflow: 'hidden',
    background: '#c7c7c7',
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },

  currentPage: {
    fontSize: '17px',
    lineHeight: '1',
    color: '#333',
    fontWeight: '400',
  },

  slash: {
    fontSize: '25px',
    color: '#d6d6d6',
    fontWeight: '300',
    transform: 'rotate(-25deg)',
  },

  totalPages: {
    fontSize: '17px',
    color: '#d6d6d6',
    fontWeight: '400',
  },

  arrow: {
    width: '42px',
    height: '42px',
    border: '1px solid #eeeeee',
    background: '#fff',
    color: '#777',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: '2px',
  },
};

function Gallery() {
  const images = [
    null,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  return (
    <main style={Styles.page}>
      <section style={Styles.content}>

        <h1 style={Styles.title}>
          <span style={Styles.titleLight}>Photo</span>
          <span style={Styles.titleBold}>Gallery</span>
        </h1>

        <div style={Styles.line}></div>

        <div style={Styles.gallery}>
          {images.map((image, index) => (
            <div
              key={index}
              style={Styles.imageWrapper}
            >
              {image && (
                <img
                  src={image}
                  alt={`Imagem da galeria ${index + 1}`}
                  style={Styles.image}
                />
              )}
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}

export default Gallery;