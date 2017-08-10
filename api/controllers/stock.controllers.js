var mongoose = require('mongoose');
var Stock = mongoose.model('Stock');
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);
});

module.exports.getStock = function(req, res){
    var stockId = req.params.stockId
    console.log('got stock symbol', stockId);
    

    // Stock
    // .find(stockId)
    // .exec(function(err, doc){
    //     if(err){
    //         console.log('error finding stock')
    //         res
    //         .status(500)
    //         .json(err);
    //     }else if (!doc){
    //         res
    //         .status(404)
    //         .json({'message': 'Stock Symbol not found'});
    //     }else{
    //         res
    //         .status(200)
    //         .json(doc);
    //     }
    // })

    var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY';
    var data = {symbol: stockId, apikey: '8GZR3OKD6QR2ATR1'};
    $.ajax({
        url: url,
        data: data,
        type: 'GET',
        success: function(res){            
            console.log(res)
        }
    });

};
