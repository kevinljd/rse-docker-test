FROM node:alpine

RUN mkdir rse-web
COPY ./ ./rse-web
WORKDIR /rse-web
RUN npm install

CMD ["npm", "start"]
