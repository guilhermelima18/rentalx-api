FROM node:14-buster

WORKDIR /app
COPY package.json ./
COPY src ./src

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]