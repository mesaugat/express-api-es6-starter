# STAGE: Development
FROM node:erbium-alpine AS dev

# Port to listen on
EXPOSE 8848

# Copy app and install packages
WORKDIR /app
COPY . /app/

RUN yarn

# Default app commands
CMD ["yarn", "start:dev"]

# STAGE: Builder
FROM node:erbium-alpine AS builder
WORKDIR /app
COPY --from=dev /app /app
RUN yarn build

# STAGE: Prod Dependencies Builder
FROM node:erbium-alpine AS prod-dependencies
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --prod

# STAGE: Run migrations
FROM dev AS migrate
WORKDIR /app
COPY --from=dev /app /app
CMD yarn migrate && yarn seed

# STAGE: Rollback migrations
FROM dev AS migrate-rollback
WORKDIR /app
COPY --from=dev /app /app
CMD yarn rollback

# STAGE: Prod Deploy Ready Image
FROM node:erbium-alpine AS prod
EXPOSE 8848
WORKDIR /app
COPY public /app/public
COPY --from=builder /app/dist /app/dist
COPY --from=prod-dependencies /app/node_modules /app/node_modules
CMD ["node", "dist/index.js"]
