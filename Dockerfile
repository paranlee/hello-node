FROM node:latest

COPY *.js ./

EXPOSE 8000
CMD [ "node", "app.js" ]
