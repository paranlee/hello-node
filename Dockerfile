FROM node:latest

COPY *.js ./

EXPOSE 8080
CMD [ "node", "app.js" ]
