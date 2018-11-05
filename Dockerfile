#
# Stage 1 [build]
#
FROM node:10-alpine as build

WORKDIR /app
COPY . /app

RUN npm install -g npm
RUN npm install
RUN npm run build:ssr

#
# Stage 2
#
FROM node:10-alpine

WORKDIR /app
COPY --from=build /app/dist /app/dist

EXPOSE 4000/tcp

CMD ["node", "dist/server"]
