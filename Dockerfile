FROM node:lts

WORKDIR /app

COPY package.json .
RUN yarn install

ARG VITE_API_SERVER_URL
ARG VITE_SOCKET_SERVER_URL
ARG VITE_ENCRYPTION_SECRET_KEY
ARG VITE_ENCRYPTION_IV
ARG VITE_ENCRYPTION_METHOD

ENV VITE_API_SERVER_URL="https://samvad-server-gewl.onrender.com"\
    VITE_SOCKET_SERVER_URL="https://samvad-server-gewl.onrender.com"\
    VITE_ENCRYPTION_SECRET_KEY="Abeo38_754ksXj"\
    VITE_ENCRYPTION_IV="xcpon8"\
    VITE_ENCRYPTION_METHOD="AES_256_CBC"

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 5173

CMD ["yarn", "run", "start"]