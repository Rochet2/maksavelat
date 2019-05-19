FROM node:10

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm ci
RUN npm run build && npm install -g serve
RUN ls

EXPOSE 5000
CMD serve -s -l 5000 dist

