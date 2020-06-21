FROM node:10

WORKDIR /server/node

COPY package*.json ./

RUN npm install

COPY . .

# Get variables from docker env
RUN node parseconfig.js

EXPOSE 8080

CMD ["node", "server.js"]