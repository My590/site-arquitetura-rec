import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Projeto1 from './pages/Projeto1';
import Projeto2 from './pages/Projeto2';
import Contato from './pages/Contato';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/1" element={<Projeto1 />} />
          <Route path="/projetos/2" element={<Projeto2 />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;