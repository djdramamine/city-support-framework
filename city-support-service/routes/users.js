var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/CitySupport2";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });

  res.send("called some api");

});

module.exports = router;
