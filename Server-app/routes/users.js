var express = require('express');
var router = express.Router();
const csv=require('csvtojson');


 
/* GET users listing. */
router.get('/list', function(req, res, next) {

	const csvFilePath='public/data/users.csv';
	var jsonArray;
	csv()
	.fromFile(csvFilePath)
	.then((jsonObj)=>{
		res.send(jsonObj);
	})
});

module.exports = router;
