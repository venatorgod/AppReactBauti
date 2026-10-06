FROM node:24.20.0-alpine AS builder

WORKDIR /usr/src/app


ENV PATH=/usr/src/app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . . 
RUN npm run build
RUN ls -la /usr/src/app


FROM nginx:1.19.4-alpine

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]