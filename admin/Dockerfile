FROM node:16.16-alpine3.15 AS builder

WORKDIR /app

COPY package.json package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --production

FROM node:16.16-alpine3.15 AS production

WORKDIR "/app"
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm","run", "start"]