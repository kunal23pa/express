var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/credit', function(req, res, next) {
  res.render('credit', { title: 'Express' });
});

router.get('/listing', function(req, res, next) {
  res.render('listing', { title: 'Express' });
});

router.get('/listing2', function(req, res, next) {
  res.render('listing2', { title: 'Express' });
});
module.exports = router;
