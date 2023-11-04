
var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Group 4' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});



/* GET Cart page. */
router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Cart' });
});

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.render('list', { title: 'List' });
});


/* GET UpdateProductdescription page. */  //areebah1
router.get('/updatedescription2', function(req, res, next) {
  res.render('updatedescription2', { title: 'updatedescription' });
});

module.exports = router;