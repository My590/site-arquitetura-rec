import React from 'react';
import { Link } from 'react-router-dom';

function Projetos() {
  // Lista de projetos para gerar os cards dinamicamente ou manualmente
  const projetos = [
    {
      id: '1',
      title: 'Residência Villa Verde',
      subtitle: 'Arquitetura Residencial • São Paulo, SP',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      link: '/projetos/1' // Rota para o Projeto1.jsx
    },
    {
      id: '2',
      title: 'Edifício Comercial Horizon',
      subtitle: 'Arquitetura Corporativa • Alphaville, SP',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      link: '/projetos/2' // Rota para o Projeto2.jsx
    }
  ];

  return (
    <section className="section page form-page" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#111' }}>Projetos</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {projetos.map((projeto) => (
          <div 
            key={projeto.id} 
            style={{
              border: '1px solid #eee',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              background: '#fff'
            }}
          >
            <img 
              src={projeto.image} 
              alt={projeto.title} 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#222' }}>
                {projeto.title}
              </h3>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
                {projeto.subtitle}
              </p>
              <Link 
                to={projeto.link}
                style={{
                  display: 'inline-block',
                  padding: '0.6rem 1.2rem',
                  backgroundColor: '#111',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}
              >
                Ver Detalhes →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
