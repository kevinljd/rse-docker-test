FROM node:alpine

RUN mkdir rse-web
COPY ./ ./rse-web
WORKDIR /rse-web
RUN npm install


EXPOSE 80

CMD ["npm", "start"]
