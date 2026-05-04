#STAGE -1 BUILD FRONTEND

FROM node:20-alpine AS frontend_builder

WORKDIR /app

COPY ./frontend/package*.json /app

RUN npm install

COPY ./frontend /app/

RUN npm run build

# STAGE-2 FULLSTACK IMAGE

FROM node:20-alpine

WORKDIR /app

COPY ./backend/package*.json /app/

RUN npm install

COPY ./backend /app

COPY --from=frontend_builder /app/dist /app/public

CMD ["node","server.js"]