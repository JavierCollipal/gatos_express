from node:10.14-alpine

RUN mkdir -p /usr/src/default_test_assignment_microservice
WORKDIR /usr/src/default_test_assignment_microservice
#ENV VARIABLES
ENV RABBIT_HOST=35.238.179.150
ENV RABBIT_PORT=5672
ENV RABBITMQ_USERNAME=carlos@woorkit.cl
ENV RABBITMQ_PASSWORD=LD8K¿w8?1un?
ENV DATABASE=woorkitqa
ENV DATABASE_USERNAME=woorkit-qa
ENV DATABASE_PASSWORD=bHRjju[xzvH/~4
ENV DATABASE_HOST=35.232.189.249
ENV DATABASE_PORT=5432
ENV DATABASE_SCHEMA=woorkit

RUN apk --no-cache add --virtual builds-deps build-base python

COPY . .

RUN npm install

CMD ["npm", "start"]
