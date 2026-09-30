import { Link } from 'react-router-dom';

function ServiceCard({ id, nome, descricao, preco, imagem }) {
  return (
    <article className="service-card">
      <img src={imagem} alt={nome} />
      <div className="card-content">
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <strong>R$ {preco}</strong>
        <Link to={`/servicos/${id}`} className="btn btn-small">Ver detalhes</Link>
      </div>
    </article>
  );
}

export default ServiceCard;