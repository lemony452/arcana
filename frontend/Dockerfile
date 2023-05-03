FROM node:18.16.0

RUN mkdir -p /app
WORKDIR /app

COPY package.json .
COPY . /app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
