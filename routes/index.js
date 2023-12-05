
var express = require('express');
var router = express.Router();
/*const Product = require('./models/Product');
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

/* GET UpdateOrderStatus page. */  //maan
router.get('/updateorderstatus', function(req, res, next) {
  res.render('updateorderstatus', { title: 'updateorderstatus' });
});

/* GET showproductstatetax page. */  //maan
router.get('/showproductstatetax', function(req, res, next) {
  res.render('showproductstatetax', { title: 'showproductstatetax' });
});

/* Get Create new product page. Noor*/
router.get('/create-product', function(req, res, next) {
  res.render('createProduct', { title: 'createProduct' });
});


module.exports = router;