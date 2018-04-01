FROM node:carbon-alpine

# Port to listen on
EXPOSE 8848

# Copy app and install packages
WORKDIR /app
COPY . /app/

# Default app commands
ENTRYPOINT ["yarn"]
CMD ["start:dev"]
