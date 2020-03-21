var express = require('express');
var router = express.Router();

const csv=require('csvtojson');

const csvFilePath='public/data/category.csv';
var jsonArray;
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    jsonArray = jsonObj;
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  	console.log(jsonArray);
	res.send(jsonArray);
});

module.exports = router;