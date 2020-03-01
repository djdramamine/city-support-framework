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

/* POST api listing. */
router.post('/donations/give', function (req, res, next) {
  var donation_id = req.body.donation_id;
  var quantity = req.body.quantity;

  let sql = 'CALL give(?,?)';
  con.query(sql, [donation_id, quantity], function (err, result, fields) {
    if (err) console.log(err);
    res.send('/'); //TODO ROUTE SOMEWHERE USEFUL
  });
});

/* POST api listing. */
router.post('/donations/claim', function (req, res, next) {
  var warehouse_id = req.body.warehouse_id;
  var donation_id = req.body.donation_id;
  var quantity = req.body.claim_quantity;

  let sql = 'CALL claim(?,?,?)';
  con.query(sql, [warehouse_id, donation_id, quantity], function (err, result, fields) {
    if (err) console.log(err);
    res.send('/'); //TODO ROUTE SOMEWHERE USEFUL
  });
});

router.post('/donations/', function (req, res, next) {

  var sponsor_id = req.body.sponsor_id;
  var donation_name = req.body.donation_name;
  var quantity = req.body.quantity;
  var donation_type = req.body.donation_type;
  var description = req.body.description;

  let sql = 'CALL sponsor_insert(?,?,?,?,?)';
  con.query(sql, [sponsor_id, donation_name, quantity, donation_type, description], function (err, result, fields) {
    if (err) console.log(err);
    res.send('/'); //TODO ROUTE SOMEWHERE USEFUL
  });
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
