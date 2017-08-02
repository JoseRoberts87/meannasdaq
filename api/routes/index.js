var express = require('express');
var router = express.Router();

var ctrlSymbol = require('../controllers/symbol.controllers');
var ctrlStocks = require('../controllers/stock.controllers');
console.log('routing1')
router
.route('/symbols')
.get(ctrlSymbol.getAll);
console.log('routing')

router
.route('/symbols/:stockId')
.get(ctrlStocks.getStock);

module.exports = router;