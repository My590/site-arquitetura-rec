import React from 'react';
import { Link } from 'react-router-dom';

export default function Projeto2() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      
      <nav style={{ marginBottom: '1.5rem' }}>
        <Link 
          to="/projetos" 
          style={{ textDecoration: 'none', color: '#111', fontWeight: '600', fontSize: '0.95rem' }}
        >
          ← Voltar para Projetos
        </Link>
      </nav>

     
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem' }}>
          Edifício Comercial Horizon
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Arquitetura Corporativa • Alphaville, SP
        </p>
      </header>

      
      <div style={{ width: '100%', marginBottom: '2.5rem' }}>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" 
          alt="Fachada do Projeto 2" 
          style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>

      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#222' }}>Conceito do Projeto</h2>
          <p style={{ lineHeight: '1.7', color: '#444', marginBottom: '1rem' }}>
            O Edifício Horizon foi projetado para atender às necessidades de empresas modernas que valorizam a sustentabilidade e o bem-estar dos colaboradores. A fachada ventilada com vidro duplo garante eficiência térmica e acústica.
          </p>
          <p style={{ lineHeight: '1.7', color: '#444' }}>
            O pavimento térreo conta com áreas abertas para convivência, auditórios flexíveis e iluminação natural estratégica em todas as estações de trabalho.
          </p>
        </div>

        <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', height: 'fit-content' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' }}>
            Ficha Técnica
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
            <li><strong>Local:</strong> Barueri / Alphaville, SP</li>
            <li><strong>Ano:</strong> 2026</li>
            <li><strong>Área Construída:</strong> 2.800 m²</li>
            <li><strong>Estilo:</strong> Corporativo Sustentável</li>
          </ul>
        </div>
      </div>

      
      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#222' }}>Galeria do Projeto</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" 
            alt="Escritório 1" 
            style={{ width: '100%', borderRadius: '6px', objectFit: 'cover', height: '250px' }} 
          />
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80" 
            alt="Escritório 2" 
            style={{ width: '100%', borderRadius: '6px', objectFit: 'cover', height: '250px' }} 
          />
        </div>
      </section>
    </main>
  );
}