import { productos } from './productos.js';
import ProductoCard from './ProductoCard.jsx';

// Vista 1
function Catalogo() {
  return (
    <section>
      <h1>Catálogo de Productos ({productos.length})</h1>
      <p className="subtitulo">Seleccioná un producto para ver su información completa.</p>

      <div className="grilla-productos">
        {productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}

export default Catalogo;
