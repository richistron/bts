FROM nginx:alpine

EXPOSE 80
WORKDIR /app

RUN apk update && apk add bash

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /app
