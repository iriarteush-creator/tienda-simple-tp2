import { useState, useEffect } from 'react';
import ProductoCard from './ProductoCard.jsx';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Vista 1: Catálogo de productos obtenidos desde el backend
function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarProductos() {
      try {
        const respuesta = await fetch(`${API_URL}/api/productos`);
        if (!respuesta.ok) {
          throw new Error('No se pudo obtener el listado de productos');
        }
        const datos = await respuesta.json();
        setProductos(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    cargarProductos();
  }, []);

  if (cargando) {
    return (
      <section>
        <h1>Catálogo de Productos</h1>
        <p className="subtitulo">Cargando productos desde el servidor...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h1>Catálogo de Productos</h1>
        <p className="subtitulo">Error al cargar el catálogo: {error}</p>
      </section>
    );
  }

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
