var express = require('express');
var router = express.Router();

const fs = require('fs');








/* GET home page. */
router.get('/', function(req, res, next) {
  const fs = require('fs');
  let rawdatac = fs.readFileSync('./bin/questions.json');

      let rawdata = fs.readFileSync('./bin/categories.json');
let categories = JSON.parse(rawdata);

  let questions=JSON.parse(rawdatac);
  console.log("aqui")
  console.log(questions);

  res.render('index', { title: 'Express', data:categories, questions:questions});
});

module.exports = router;
