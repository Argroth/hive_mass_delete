FROM node:21-alpine3.18
LABEL authors="Łukasz G."

WORKDIR /usr/app
COPY ./ ./

RUN npm install

CMD ["node", "app.js"]