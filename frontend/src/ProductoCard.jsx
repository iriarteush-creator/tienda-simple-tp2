import { Link } from 'react-router';

// Componente reutilizable

function ProductoCard({ producto }) {
  return (
    <article className="tarjeta-producto">
      <h2>{producto.nombre}</h2>
      <p className="precio">${producto.precio}</p>
      <p className="descripcion-breve">{producto.descripcion}</p>
      {/* no recargar la página completa */}
      <Link to={'/producto/' + producto.id} className="boton">
        Ver detalle
      </Link>
    </article>
  );
}

export default ProductoCard;
