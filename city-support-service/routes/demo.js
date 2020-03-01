var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var path = require('path');

var con = mysql.createPool({
  password: 'Secure_123',
  user: 'dushar88',
  host: '35.188.254.38',
  port: 3306,
  database: 'city_support'
});

/* GET api listing. */
router.get('/', function (req, res, next) {
  res.sendFile('login.html', {
    root: path.resolve(__dirname, '../public')
  });
});

/* GET api listing. */
router.get('/sponsors', function (req, res, next) {
  res.sendFile('sponsorMain.html', {
    root: path.resolve(__dirname, '../public')
  });
});

router.get('/warehouses', function (req, res, next) {
  res.sendFile('warehouseMain.html', {
    root: path.resolve(__dirname, '../public')
  });
});

router.get('/users', function (req, res, next) {
  res.sendFile('userMain.html', {
    root: path.resolve(__dirname, '../public')
  });
});

module.exports = router;
