FROM node:13.10.1
RUN apt-get -q update && apt-get -qy install netcat curl
WORKDIR /usr/app
COPY package.json .
COPY webpack.config.ts .
COPY src ./src
COPY tsconfig.json .
RUN curl -OL https://raw.githubusercontent.com/mrako/wait-for/master/wait-for && chmod +x wait-for
RUN npm install
RUN npm install -g webpack@4.44.2 path webpack-node-externals



