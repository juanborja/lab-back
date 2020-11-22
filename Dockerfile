FROM node:13.10.1
RUN apt-get -q update && apt-get -qy install netcat curl
WORKDIR /usr/app
COPY package.json .
COPY build .
RUN curl -OL https://raw.githubusercontent.com/mrako/wait-for/master/wait-for && chmod +x wait-for
RUN npm install



