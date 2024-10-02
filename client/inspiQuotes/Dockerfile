# Use an official Node.js runtime as a parent image
FROM node:20.2.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose port for the frontend
EXPOSE 5173


# Copy the entire frontend codebase
COPY . .


# Start the app
CMD ["npm", "run", "dev"]