var mongoose = require('mongoose');
var Stock = mongoose.model('Stock')
var request = require('ajax-request');

module.exports.getStock = function(req, res){
    var stockId = req.params.stockId
    console.log('got stock symbol', stockId);
};
