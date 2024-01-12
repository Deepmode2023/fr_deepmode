FROM node:20.11.0-bullseye-slim

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 8000