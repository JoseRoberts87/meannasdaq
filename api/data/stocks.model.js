var mongoose = require('mongoose');

var stockSchema = mongoose.Schema({
    Stock:{}
});

mongoose.model('Stock', stockSchema);