var express = require('express');
var router = express.Router();

const fs = require('fs');








/* GET home page. */
router.get('/', function(req, res, next) {
  const fs = require('fs');

      let rawdata = fs.readFileSync('./bin/categories.json');
let categories = JSON.parse(rawdata);

 
  console.log(categories);

  res.render('index', { title: 'Express', data:categories});
});

module.exports = router;
