# Node image
FROM node:20-alpine

WORKDIR /usr/src/frontend

# Install pnpm global
RUN npm i pnpm -g

# Copy required files
COPY ./src ./src
COPY ./package.json ./
COPY ./react-server.config.mjs ./
COPY ./vite.config.js ./

ENV CI=1

# Install pnpm and dependencies
RUN pnpm install \
  && pnpm build

# Expose port
EXPOSE 3000

# Start
CMD ["pnpm", "start"]
