db = db.getSiblingDB('tip');
db.createUser(
  {
    user: 'api_user',
    pwd: 'api1234',
    roles: [{ role: 'readWrite', db: 'tip' }],
  },
);

db.createCollection("Features");
db.createCollection("TeamMembers");