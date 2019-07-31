FROM node:carbon-alpine AS dev

# Port to listen on
EXPOSE 8848

# Copy app and install packages
WORKDIR /app
COPY . /app/

RUN yarn

# Default app commands
ENTRYPOINT ["yarn"]
CMD ["start:dev"]

