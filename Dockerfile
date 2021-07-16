FROM node:latest

COPY *.js ./

ADD static static

EXPOSE 8080
CMD [ "node", "app.js" ]
