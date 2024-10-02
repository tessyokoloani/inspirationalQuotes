# Use an official Node.js image
FROM node:20.2.0

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./

RUN npm install

# Copy the backend codebase
COPY . .

# Expose port 3444 for the backend
EXPOSE 3444

# Start the backend server
CMD ["node", "index.js"]

