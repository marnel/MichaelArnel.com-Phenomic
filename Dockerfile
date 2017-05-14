FROM node:7.10.0-wheezy
EXPOSE 3333

#RUN npm install -g lerna
RUN npm install -g node-gyp
RUN mkdir /mysite && cd /mysite && mkdir node_modules

WORKDIR /mysite

RUN yarn add phenomic && ./node_modules/.bin/phenomic setup
RUN yarn install

RUN cd ./node_modules/leveldown chmod -R 777 . && node-gyp rebuild
RUN cd /mysite
#ENTRYPOINT yarn start



