FROM node:18.16.0

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN npm install

EXPOSE 13001

CMD ["node", "app.js"]
