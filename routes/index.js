var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple Express App' });
});

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.status(200).send({ message: 'pong' });
});


module.exports = router;
