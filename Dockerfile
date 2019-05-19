FROM node:10

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm ci
RUN ls

EXPOSE 3000
CMD npm start

