# Create a database instance for mongodb

## Overview
- Use the following if you don't already have a mongodb instance. 
- A separate docker-compose.yml will be created for the whole mern-stack-demo app once the course is completed

## Prerequisite
1. MongoDB Compass (https://www.mongodb.com/try/download/compass)

## Deploy mongodb instance using the following commands

```bash
docker-compose up -d
```

## Access the database

### Access via MongoDB Compass
1. Open MongoDB Compass
2. Click 'Connect' > 'New Connection'
3. Input the following URL
```bash
mongodb://root:example@localhost:27017
```

### Access via Docker container
1. Find the following mongodb container (mern-stack-demo-mongodb)
```bash
docker ps -a
```
2. Go in the container.  
note: For Windows use Powershell
```bash
docker exec -it <container_name> /bin/bash/
```
3. Inside the container, run the following command to access the database
```bash
# mongosh -u root -p example
```

## Initialize mongodb database
1. Create database

```bash
use mernapp
```

2. Create collections

```bash
mernapp.createCollection('goals')
```

## Stop mongodb using the following command
```bash
docker-compose up -d
```

## Clean container instances on local machine using the following command
```bash
docker rmi mern-stack-demo-mongodb
```