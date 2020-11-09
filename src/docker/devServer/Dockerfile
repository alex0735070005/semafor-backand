# base image
FROM node:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .

COPY yarn.lock .

RUN yarn install

RUN yarn global add pm2@latest

COPY ./src/docker/devServer/ssh.config  /root/.ssh/config
