var express = require('express');
var router = express.Router();

const csv=require('csvtojson');

function getCategory(id) {
    for (const row of categoryJson) {
      if (row["id"] === id) {
        return row["category"];
      }
    }
    return 'N/A';
  }

/* GET users listing. */
router.get('/list', function(req, res, next) {
	const csvFilePath='public/data/items.csv';
	var jsonArray;
	csv()
	.fromFile(csvFilePath)
	.then((jsonObj)=>{
	    res.send(jsonObj);
	})
});

module.exports = router;