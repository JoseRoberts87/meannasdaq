var mongoose = require('mongoose');
var Sym = mongoose.model('Symbol');

module.exports.getAll = function(req, res){
    console.log('getting all sysmbols')
    var offset = 0;
    var count = 10;
    var maxCount = 20;

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }

    if(req.query && req.query.count){
        count = parseInt(req.query.count, 10);
    }

    if(isNaN(offset) ||  isNaN(count)){
        res
        .status(400)
        .json({'message' : 'offset and count must be numbers'})
        return;
    }

    if(count > maxCount){
        res
        .status(400)
        .json({'message':'count limit of ' + maxCount + ' exceeded'});
        return;
    }
    
    // var symbolId = req.params.symbolId
    // console.log('got sysmbol id', symbolId);

    Sym
    .find()
    .skip(offset)
    .limit(count)
    .exec(function(err, syms){
        if(err){
            console.log(err);
            res
            .status(400)
            .json(err);
        }else{
            console.log('symbols found', syms)
            res
            .status(200)
            .json(syms);
            
        }
    })
}