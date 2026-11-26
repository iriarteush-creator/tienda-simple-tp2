FROM node:22-alpine

WORKDIR /app

# Dependencias caché de capas
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
