FROM node:10

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm ci
RUN ls

EXPOSE 8080
CMD npm start

