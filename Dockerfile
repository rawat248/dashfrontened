# ===== Stage 1: Build React App =====
FROM node:18-alpine AS build

# Accept build args
ARG REACT_APP_SERVER_BASE_URL

# Set env variables (no spaces around `=`)
ENV REACT_APP_SERVER_BASE_URL=$REACT_APP_SERVER_BASE_URL

WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the code and build
COPY . .
RUN npm run build

# ===== Stage 2: Serve with Nginx =====
FROM nginx:1.23-alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy built app from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
