FROM node:20-alpine AS builder

WORKDIR /backend

COPY package*.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ../../
COPY src ./src

RUN npm install
RUN npm run build

FROM node:20-alpine

WORKDIR /backend

COPY ../package*.json ./

COPY --from=builder /backend/dist ./dist
COPY --from=builder /backend/node_modules ./node_modules
COPY package*.json ./
RUN npm install --production

EXPOSE 3000

CMD ["npm", "run", "serve"]
