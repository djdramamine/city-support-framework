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
router.get('/sponsors/:id', function (req, res, next) {
  let sql = 'CALL getSponsors(?)';
  con.query(sql, req.params["id"], function (err, result, fields) {
    if (err) console.log(err);
    res.send(result);
  });
});

/* GET api listing. */
router.get('/warehouses/:id', function (req, res, next) {
  let sql = 'CALL getWarehouses(?)';
  con.query(sql, req.params["id"], function (err, result, fields) {
    if (err) console.log(err);
    res.send(result);
  });
});


/* GET api listing. */
router.get('/donations/:wid/:tid', function (req, res, next) {
  let sql = 'CALL getWarehousesAndDonations(?,?)';
  console.log((req.params["wid"], req.params["tid"]));
  con.query(sql, [req.params["wid"], req.params["tid"]], function (err, result, fields) {
    if (err) console.log("whoops");
    res.send(result);
  });
});

router.get('/sponsors/donations/:sid/:tid', function (req, res, next) {
  let sql = 'CALL getSponsorsAndDonations(?,?)';
  console.log((req.params["sid"], req.params["tid"]));
  con.query(sql, [req.params["sid"], req.params["tid"]], function (err, result, fields) {
    if (err) console.log("whoops");
    res.send(result);
  });
});

/* GET api listing. */
router.get('/', function (req, res, next) {
  res.send('api got a request at base level');
});

/* GET api listing. */
router.get('/', function (req, res, next) {
  res.send('api got a request at base level');
});

/* GET api listing. */
router.get('/', function (req, res, next) {
  res.send('api got a request at base level');
});

/* GET api listing. */
router.get('/', function (req, res, next) {
  res.send('api got a request at base level');
});

/* GET api listing. */
router.get('/donation/types', function (req, res, next) {
  con.query("SELECT * FROM donation_types;", function (err, result, fields) {
    if (err) console.log("SomethingWrong");
    res.send(result);
  });
});

/* GET api listing. */
router.get('/events', function (req, res, next) {
  res.sendFile('example.html', {
    root: path.resolve(__dirname, '../public')
  });
});

module.exports = router;
