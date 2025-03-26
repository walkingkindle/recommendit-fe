# Step 1: Build the Angular app
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Step 2: Serve the Angular app using a lightweight web server
FROM nginx:alpine

# Copy the built Angular app from the previous build stage
COPY --from=build /app/dist/your-app-name /usr/share/nginx/html

# Expose the port for the web server
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
