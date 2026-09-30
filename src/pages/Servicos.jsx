import ServiceCard from '../components/ServiceCard';

const servicos = [
  { id: 1, nome: 'Corte Masculino', descricao: 'Corte tradicional ou moderno.', preco: '40,00', imagem: '/corte.jpg' },
  { id: 2, nome: 'Barba', descricao: 'Barba desenhada e acabamento.', preco: '35,00', imagem: '/barba.jpg' },
  { id: 3, nome: 'Corte + Barba', descricao: 'Combo completo para seu visual.', preco: '65,00', imagem: '/combo.jpg' },
  { id: 4, nome: 'Sobrancelha', descricao: 'Design e acabamento.', preco: '20,00', imagem: '/sobrancelha.jpg' },
  { id: 5, nome: 'Outros Serviços', descricao: 'Consulte outras opções.', preco: '30,00', imagem: '/outros.jpg' }
];

function Servicos() {
  return (
    <section className="section page">
      <h1>Nossos Serviços</h1>
      <p>Escolha um serviço para conhecer os detalhes.</p>
      <div className="services-grid">
        {servicos.map((servico) => (
          <ServiceCard key={servico.id} {...servico} />
        ))}
      </div>
    </section>
  );
}

export default Servicos;