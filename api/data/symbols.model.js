var mongoose = require('mongoose');

var symbolsSchema = new mongoose.Schema({
    Symbol: {
        type: String,
        required: true
    },
    "Security Name":{
        type: String,
        required: true
    },
    "Market Category": String,
    "Test Issue":String,
    "Financial Status":String,
    "Round Lot Size":Number,
    ETF:String,
    NextShares:String
});

mongoose.model('Symbol', symbolsSchema);