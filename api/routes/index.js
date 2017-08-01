var express = require('express');
var router = express.Router();

var ctrlSymbol = require('../controllers/symbol.controllers');
var ctrlStocks = require('../controllers/stock.controllers');

router
.route('/symbol')
.get(ctrlSymbol.getAll);

router
.route('/symbol/:stockId')
.get(ctrlStocks.getStock);

module.exports = router;