import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Catalogo from './Catalogo.jsx';
import Detalle from './Detalle.jsx';

// Componente raíz 
function App() {
  return (
    <BrowserRouter>
      <header className="encabezado">
        <div className="contenedor-nav">
          <Link to="/" className="marca">
            TiendaSimple
          </Link>
          <nav>
            <Link to="/">Catálogo</Link>
          </nav>
        </div>
      </header>

      <main className="contenedor-principal">
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/producto/:id" element={<Detalle />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
