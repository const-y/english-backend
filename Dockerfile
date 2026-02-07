FROM node:24-alpine AS builder

WORKDIR /app

COPY . .

RUN npm ci
RUN npx prisma generate
RUN npm run build


FROM node:24-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma
RUN npm ci --omit=dev
RUN npx prisma generate

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/src/main.js"]
