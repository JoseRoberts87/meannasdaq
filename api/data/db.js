var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/meannasdaq';

mongoose.connect(dburl);

mongoose.connection.on('connected',function(){
    console.log('mongoose connected' + dburl);
});

mongoose.connection.on('disconnected', function(){
    console.log('mongoose disconnected');
});

mongoose.connection.on('error', function(err){
    console.log('mongoose error' + err);
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through SIGINT');
        process.exit(0);
    });
});

process.on('SIGTERM', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected via SIGTERM');
        process.exit(0);
    });
});

process.once('SIGUSR2', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected via SIGUSR2');
        process.kill(process.pid, 'SIGUSR2');
    });
});

require('./symbols.models.js');