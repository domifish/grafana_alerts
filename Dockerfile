FROM ubuntu

# Install app dependencies
RUN apt-get update && apt-get install -y nsca-client nodejs npm 

# Create app directory
RUN mkdir -p /usr/src/app/grafAlerts

WORKDIR /usr/src/app/grafAlerts

COPY package.json /usr/src/app/grafAlerts
# Bundle app source
RUN npm install
COPY . /usr/src/app/grafAlerts

EXPOSE 3000
CMD [ "npm", "start" ]

