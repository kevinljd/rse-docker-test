FROM node:alpine as builder

WORKDIR /rse-web
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx
EXPOSE 80
COPY --from=builder /rse-web/build /usr/share/nginx/html/



