angular.module('meannasdaq').controller('StocksController', StocksController);

function StocksController(nasdaqDataFactory){
    var vm = this;
    vm.title = 'MEAN Nasdaq App';
    //     $http.get('/api/hotels?count=10').then(function(response){
    nasdaqDataFactory.nasdaqList().then(function(response){
        console.log(response);
        vm.hotels = response;
    });
}