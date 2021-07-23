# Team Member API
  Engagement API for Team Member. 
  See documentation [here](doc/team-member.yaml).
## Repository
```
git clone https://github.com/esonpaguia/team-member.git
```

## Tech Stack
- node
- docker
- docker-compose

## Dev
```
cd team-member
npm install
DEBUG=team-member:* npm start
```

## Build & Deploy
- Startup
```
docker-compose up -d --build
```
- Shutdown
```
docker-compose down -v --rmi all
```