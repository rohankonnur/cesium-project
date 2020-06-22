FROM node:7
RUN mkdir /cesium_project
ADD . /cesium_project
WORKDIR /cesium_project
RUN npm i
EXPOSE 80
CMD ["npm", "start"]