import React from 'react';
import { Link } from 'react-router-dom';

export default function Projeto1() {
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
          Residência Villa Verde
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Arquitetura Residencial • São Paulo, SP
        </p>
      </header>

    
      <div style={{ width: '100%', marginBottom: '2.5rem' }}>
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
          alt="Fachada do Projeto 1" 
          style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>

      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#222' }}>Sobre o Projeto</h2>
          <p style={{ lineHeight: '1.7', color: '#444', marginBottom: '1rem' }}>
            O projeto da Residência Villa Verde foi desenvolvido com foco na integração total entre os ambientes internos e a área verde externa. A estrutura utiliza grandes painéis de vidro para favorecer a iluminação natural e reduzir o consumo de energia.
          </p>
          <p style={{ lineHeight: '1.7', color: '#444' }}>
            Os acabamentos em madeira e concreto aparente trazem uma estética contemporânea e aconchegante, mantendo a sofisticação e funcionalidade necessárias para o dia a dia da família.
          </p>
        </div>

        
        <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', height: 'fit-content' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' }}>
            Ficha Técnica
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '2' }}>
            <li><strong>Local:</strong> São Paulo, SP</li>
            <li><strong>Ano:</strong> 2025</li>
            <li><strong>Área do Terreno:</strong> 450 m²</li>
            <li><strong>Estilo:</strong> Contemporâneo</li>
          </ul>
        </div>
      </div>

      
      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#222' }}>Galeria do Projeto</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <img 
            src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80" 
            alt="Interior 1" 
            style={{ width: '100%', borderRadius: '6px', objectFit: 'cover', height: '250px' }} 
          />
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80" 
            alt="Interior 2" 
            style={{ width: '100%', borderRadius: '6px', objectFit: 'cover', height: '250px' }} 
          />
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" 
            alt="Interior 3" 
            style={{ width: '100%', borderRadius: '6px', objectFit: 'cover', height: '250px' }} 
          />
        </div>
      </section>
    </main>
  );
}