var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/produits', function(req, res, next) {
  res.render('produits', { title: 'Express' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('aboutUs', { title: 'Express' });
});
router.get('/produit1', function(req, res, next) {
  res.render('produit1', { title: 'Express' });
});
router.get('/produit2', function(req, res, next) {
  res.render('produit2', { title: 'Express' });
});
router.get('/produit3', function(req, res, next) {
  res.render('produit3', { title: 'Express' });
});
router.get('/produit4', function(req, res, next) {
  res.render('produit4', { title: 'Express' });
});
module.exports = router;
