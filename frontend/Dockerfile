
from node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
ENTRYPOINT ["yarn", "start"]
