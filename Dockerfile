FROM node:12

WORKDIR /app

RUN npm install && \
    npm init -y && \
    yarn add --dev typescript ts-node ts-node-dev jest ts-jest @types/jest && \
    mkdir src tests && touch src/app.ts tests/index.test.ts && \
    cd /usr/local/bin &&\
    ln -s /app/node_modules/typescript/bin/tsc && \
    tsc --init