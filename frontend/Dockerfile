FROM node:18.16.0

COPY package*.json ./
COPY app.js ./

RUN npm install

EXPOSE 13001

CMD ["node", "app.js"]
