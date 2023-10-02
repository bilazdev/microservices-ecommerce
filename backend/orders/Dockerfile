
from node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g pnpm && pnpm i
COPY . .
ENTRYPOINT ["pnpm", "start:dev"]
