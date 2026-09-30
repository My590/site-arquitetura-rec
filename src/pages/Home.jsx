import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const servicos = [
  { id: 1, nome: 'Corte Masculino', descricao: 'Corte tradicional ou moderno.', preco: '40,00', imagem: '/corte.jpg' },
  { id: 2, nome: 'Barba', descricao: 'Barba desenhada e acabamento.', preco: '35,00', imagem: '/barba.jpg' },
  { id: 3, nome: 'Corte + Barba', descricao: 'Combo completo para seu visual.', preco: '65,00', imagem: '/combo.jpg' },
  { id: 4, nome: 'Sobrancelha', descricao: 'Design e acabamento.', preco: '20,00', imagem: '/sobrancelha.jpg' }
];

function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">ESTILO • CUIDADO • CONFIANÇA</p>
          <h1>Seu estilo,<br />nossa especialidade.</h1>
          <p>Cortes, barba e muito mais. Agende seu horário!</p>
          <Link to="/agendamento" className="btn">Agendar agora</Link>
        </div>
      </section>

      <section className="section">
        <h2>Nossos Serviços</h2>
        <div className="services-grid">
          {servicos.map((servico) => (
            <ServiceCard key={servico.id} {...servico} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;