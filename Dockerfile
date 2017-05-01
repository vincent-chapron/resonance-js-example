FROM node:7

WORKDIR /workspace

ADD . /workspace

RUN apt-get update \
    && npm install
