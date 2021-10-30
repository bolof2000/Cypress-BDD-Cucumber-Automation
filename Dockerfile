FROM cypress/base:ubuntu19-node12.14.1
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN ["npm","run","cy:run"]
