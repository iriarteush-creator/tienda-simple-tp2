FROM node:22-alpine

WORKDIR /app

# Primero las dependencias, para aprovechar la caché de capas
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Después el código
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
