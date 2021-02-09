FROM node:12

WORKDIR /usr/src/app

ARG BUILD
ENV START=${BUILD}
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 8080
CMD node ${START}