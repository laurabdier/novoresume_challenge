FROM node:8.7.0-alpine

WORKDIR /home/app

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
