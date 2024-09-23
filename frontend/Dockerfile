# Step 1: Specify the base image with Node.js
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files into the container
COPY . .

# Step 6: Expose the port your React app runs on (3000)
EXPOSE 3000

# Step 7: Start the React development server and bind it to 0.0.0.0
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
