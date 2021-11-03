# Service API Database
MongoDB database to be run together with the Service APIs.

## Development Build

### Startup
```
docker-compose up -d --build
```

### Shutdown
```
docker-compose down -v --rmi all
```

### Health check
```
docker ps
```

### Browse
- http://localhost:8181


## Production Build
```
docker build -t telusinternational.com/tip-tids-service-api-database .
docker run -d --name mongodb --env-file=db-config.env -p 27017:27017 telusinternational.com/tip-tids-service-api-database
```

### Connect via mongo CLI
- Thru the image
  ```
  docker exec -it mongodb bash
  mongosh -u {USERNAME} -p {PASSWORD}
  ```
- From local CMD
  ```
  mongosh mongodb://127.0.0.1:27017/tip -u api_user -p api1234
  ```
- To import csv to mongodb collection
  ```
  mongoimport --host=127.0.0.1 --port=27017 --db=tip --collection=TeamMembers --file=TeamMembers.csv --headerline --type=csv -u api_user -p api1234
  ```
  or
  ```
  mongoimport --host 127.0.0.1:27017 -d tip -c TeamMembers --file TeamMembers.csv --headerline --type csv -u api_user -p api1234
  ```
