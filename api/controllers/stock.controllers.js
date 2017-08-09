var mongoose = require('mongoose');
var Stock = mongoose.model('Stock')

module.exports.getStock = function(req, res){
    var stockId = req.params.stockId
    console.log('got stock symbol', stockId);

    Stock
    .find(stockId)
    .exec(function(err, doc){
        if(err){
            console.log('error finding stock')
            res
            .status(500)
            .json(err);
        }else if (!doc){
            res
            .status(404)
            .json({'message': 'Stock Symbol not found'});
        }else{
            res
            .status(200)
            .json(doc);
        }
    })

};