var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json(
    {
      "message" : "Get resource"
    }
  );
});

router.post('/', function(req, res, next) {
  res.json(
    {
      "message" : "Post resource"
    }
  );
});

router.get('/:workdayId', function(req, res, next) {
  res.json(
    {
      "message" : "Get resource",
      "team-member-id" : req.params.workdayId
    }
  );
});

router.patch('/:workdayId', function(req, res, next) {
  res.json(
    {
      "message" : "Patch resource",
      "team-member-id" : req.params.workdayId
    }
  );
});

router.delete('/:workdayId', function(req, res, next) {
  res.json(
    {
      "message" : "Delete resource",
      "team-member-id" : req.params.workdayId
    }
  );
});

module.exports = router;
