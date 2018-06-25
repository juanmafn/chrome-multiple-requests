var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/echo/:id', function(req, res, next) {
  return res.json({echo: req.params.id});
});

module.exports = router;
