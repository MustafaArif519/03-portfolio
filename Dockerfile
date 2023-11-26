# Use the official Node.js image as the base image
FROM node

# Set the working directory to /app
WORKDIR /app

# Copy package.json to the container at /app
COPY package.json .

# Install dependencies using npm
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Expose port 5173 to the outside world
EXPOSE 5173

# Command to run the application in development mode
CMD ["npm", "run", "dev"]
