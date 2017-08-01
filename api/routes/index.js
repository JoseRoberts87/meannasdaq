var express = require('express');
var router = express.Router();


router
.route('/index')
.get(ctrlIndex.getAll)

router
.route('/index/:stockId')
.get(ctrlStocks.getStock);