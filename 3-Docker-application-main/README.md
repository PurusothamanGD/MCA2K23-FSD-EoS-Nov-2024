
# Dockerized Node.js and MongoDB Application Readme

## Introduction

This readme provides instructions for setting up a Dockerized Node.js and MongoDB application that supports basic read and write operations, including "name" and "email" in the request body. This application will allow you to interact with a MongoDB database through a Node.js server, all within Docker containers.

## Prerequisites

Before you begin, make sure you have the following software installed on your system:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)
- A code editor of your choice (e.g., Visual Studio Code)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd docker-node-mongodb-app
   ```

3. Install Node.js dependencies:

   ```bash
   npm install
   ```

4. Start the Docker containers by running the following command from the project root:

   ```bash
   docker-compose up
   ```

   This command will build and start two containers, one for the Node.js server and another for the MongoDB database.

5. Once the containers are up and running, you can access the Node.js application at [http://localhost:3000](http://localhost:3000) in your web browser.



### API Endpoints

1. **Create a new item**

   - **Method:** GET
   - **Endpoint:** http://localhost:3000/writeMongo
   - **Request Body:**
     ```json
     {
       "name": "Your Name",
       "email": "Your Email"
     }
     ```

2. **Read all items**

   - **Method:** GET
   - **Endpoint:** http://localhost:3000/readMongo

3. **Read a Greeting message**

   - **Method:** GET
   - **Endpoint:** http://localhost:3000/





## Docker Compose Configuration

The `docker-compose.yml` file in the project directory defines the services and their configurations for the Node.js application and MongoDB.

- Node.js application:
  - Uses the official Node.js Docker image.
  - Exposes port 3000 for accessing the application.
  - Connects to the MongoDB container using the service name "mongodb."

- MongoDB:
  - Uses the official MongoDB Docker image.
  - Exposes port 27017 for MongoDB connections.

## Cleaning Up

To stop and remove the Docker containers, use the following command in the project directory:

```bash
docker-compose down
```

