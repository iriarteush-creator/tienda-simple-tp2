# TiendaSimple — TP2 Integrador (Tecnologías Web - UNL)

Proyecto integrador de la materia **Tecnologías Web** (Tecnicatura en Informática Aplicada al Diseño Multimedia y Sitios Web - FICH/UNL).

## Enlaces del proyecto

> **Completar antes de comprimir la entrega final:**

- **Frontend publicado:** `https://<tu-frontend>.netlify.app` (o Vercel)
- **Endpoint del backend publicado:** `https://<tu-backend>.onrender.com/api/productos`
- **Repositorio de GitHub:** https://github.com/iriarteush-creator/tienda-simple-tp2
- **Tablero Kanban público:** `https://github.com/users/<tu-usuario>/projects/<numero>` (o enlace de Trello)

## Estructura del proyecto

- `frontend/`: Aplicación SPA en React + Vite + React Router. La vista Catálogo consume los productos desde el backend mediante `fetch` usando la variable `VITE_API_URL`.
- `backend/`: API REST en Node.js + Express 5 que expone `GET /api/productos`, con `Dockerfile` y `.dockerignore`.
- `.github/workflows/ci.yml`: Pipeline de integración continua (GitHub Actions) que verifica el backend y construye su imagen Docker ante cada `push` a `main`.

## Ejecución local

### 1. Backend

```bash
cd backend
npm install
npm run dev
```

Queda escuchando en `http://localhost:3000/api/productos`.

Variables de entorno opcionales (archivo `backend/.env`):
- `PORT` (por defecto `3000`)
- `ORIGEN_WEB` (por defecto `http://localhost:5173`)

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Queda disponible en `http://localhost:5173`.

Variable de entorno opcional (archivo `frontend/.env`):
- `VITE_API_URL` (por defecto `http://localhost:3000`)

### 3. Contenedor Docker del backend

```bash
cd backend
docker build -t tienda-simple-backend .
docker run -d -p 3000:3000 --name tienda-api tienda-simple-backend
```
