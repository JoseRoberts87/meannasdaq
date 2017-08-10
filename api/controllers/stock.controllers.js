var mongoose = require('mongoose');
var Stock = mongoose.model('Stock')
var request = require('ajax-request');

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

    // var url = 'https://www.alphavantage.co/query';
    // var data = {function: 'TIME_SERIES_DAILY',symbol: stockId, apikey: '8GZR3OKD6QR2ATR1'};
    // request({
    //     url: url,
    //     method: 'GET',
    //     data: data        
    // }, 
    // function(err, res, body){            
    //         if(err){
    //         console.log('error finding stock')
    //     }else if (!body){
    //         console.log(res, {'message': 'Stock Symbol not found'});
    //     }else{
    //         console.log(body);
    //     }        
    // }
    // );
    //request('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPC&apikey=8GZR3OKD6QR2ATR1', function(err, res, body) {console.log('body',body)});
};
