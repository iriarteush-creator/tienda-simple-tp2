import { useParams, Link } from 'react-router';
import { productos } from './productos.js';

// Vista 2: Detalle de un producto seleccionado
function Detalle() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === Number(id));
//producto no encontrado
  if (!producto) {
    return (
      <section className="detalle-producto">
        <h1>Producto no encontrado</h1>
        <p>El producto que buscás no existe en el catálogo.</p>
        <Link to="/" className="boton">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  return (
    <section className="detalle-producto">
      {producto.imagen && (
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="imagen-detalle"
        />
      )}
      <h1>{producto.nombre}</h1>
      <p className="codigo">Código de producto: #{producto.id}</p>
      <p className="precio-grande">${producto.precio}</p>
      <h3>Descripción completa</h3>
      <p className="descripcion-completa">{producto.descripcion}</p>

      <Link to="/" className="boton">
        ← Volver al catálogo
      </Link>
    </section>
  );
}

export default Detalle;
