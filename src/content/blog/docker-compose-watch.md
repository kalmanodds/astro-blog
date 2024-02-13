---
author: Sigurður Kalman Oddsson
publishedAt: 2024-02-12T15:22:00Z
title: "Docker Compose Watch: The Key to Perfect Full-Stack DX"
postSlug: docker-compose-watch
featured: true
draft: true
tags:
  - docker
  - nextjs
  - postgres
ogImage: ""
description:
  An introduction to `docker compose watch` and a tutorial on how to spin up a full-stack environment with a single command.
---
My favorite use case for Docker is to spin up a local database for development purposes. This frees me from the burdon of having to set up the appropriate database engine on my local machine. Taking this a step further, it is possible to run all neccessary components of your application with a single `docker compose` configuration. Until recently, this has been a painful method of doing development since any code changes would require a full restart to take effect. 

Instroduced in a recent update, `docker compose watch` allows running Compose services to monitor certain code paths and update as you edit and save code. In this article I will show you how to set up a project using NextJS and PostgreSQL that can be spun up locally using this command.

## Creating the NextJS App

To create our nextjs app simply run:
```bash
npx create-next-app@latest
```
From there, follow the instructions in the terminal to select which components to include. I recommend the default options, TypeScript, ESLint, app directory, etc.

After everything finishes downloading we should be able to run our application in development mode using `npm run dev`. But we want to run this app using Docker so lets create a Dockerfile:
```bash
touch Dockerfile
```
Inspired by [NextJS's dev Dockerfile example](https://github.com/vercel/next.js/blob/canary/examples/with-docker-compose/next-app/dev.Dockerfile), let's write instructions to copy the source code over to the container's /app directory, install the necessary dependencies and run the application in development mode:
```dockerfile
FROM node:alpine

RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
EXPOSE 3000

CMD ["npm", "run", "dev"]
```