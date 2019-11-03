from node:10.14-alpine

RUN mkdir -p /usr/src/cats
WORKDIR /usr/src/cats

RUN apk --no-cache add --virtual builds-deps build-base python

COPY . .

RUN npm install

CMD ["npm", "start"]
