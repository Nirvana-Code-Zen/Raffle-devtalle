FROM node:20-alpine

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY ["package.json", "pnpm-lock.yaml", "."]

RUN pnpm install

COPY . .

ARG SERVICE_PORT

EXPOSE $SERVICE_PORT
CMD ["pnpm", "dev"]
