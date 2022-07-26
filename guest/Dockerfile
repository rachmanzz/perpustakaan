FROM node:16.16-alpine3.15 AS builder

WORKDIR /app

COPY package.json package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --production

FROM node:16.16-alpine3.15 AS production

WORKDIR "/app"
COPY --from=builder /app/dist ./dist

RUN npm install -g http-server

EXPOSE 3000

CMD ["http-server", "dist"]