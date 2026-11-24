const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const ORIGEN_WEB = process.env.ORIGEN_WEB || 'http://localhost:5173';

const app = express();
app.use(cors({ origin: ORIGEN_WEB }));
app.use(express.json({ limit: '100kb' }));

// Middleware de registro (logging) de cada solicitud
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
  next();
});

// Listado de productos (mismos datos del TP1, ahora servidos desde el backend)
const productos = [
  {
    id: 1,
    nombre: 'Auriculares Inalámbricos Bluetooth',
    precio: 45000,
    descripcion: 'Auriculares con cancelación de ruido activa, batería de hasta 30 horas de duración y estuche de carga rápida.'
  },
  {
    id: 2,
    nombre: 'Teclado Mecánico Compacto',
    precio: 62000,
    descripcion: 'Teclado mecánico formato 75% con interruptores suaves, retroiluminación LED y cable USB-C desmontable.'
  },
  {
    id: 3,
    nombre: 'Mouse Gamer Ergonómico',
    precio: 28500,
    descripcion: 'Mouse óptico de alta precisión con 6 botones programables y sensor ajustable hasta 12.000 DPI.'
  },
  {
    id: 4,
    nombre: 'Monitor Full HD 24 Pulgadas',
    precio: 195000,
    descripcion: 'Pantalla IPS de 24 pulgadas con resolución 1920x1080, tasa de refresco de 75Hz y bordes ultradelgados.'
  },
  {
    id: 5,
    nombre: 'Soporte Regulable para Notebook',
    precio: 18000,
    descripcion: 'Base plegable de aluminio con 6 niveles de inclinación que mejora la postura y la ventilación del equipo.'
  }
];

// Único endpoint: devuelve el listado de productos en formato JSON
app.get('/api/productos', (req, res) => {
  res.json(productos);
});

// Middleware de rutas inexistentes (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Middleware de manejo de errores (500)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
