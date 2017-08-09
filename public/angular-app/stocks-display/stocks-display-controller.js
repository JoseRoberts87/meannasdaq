angular.module('meannasdaq').controller('StocksController', StocksController);

function StocksController($route, $routeParams, nasdaqDataFactory){
    var vm = this;
    var id = $routeParams.Symbol;
    vm.title = 'MEAN Nasdaq App';
    //     $http.get('/api/hotels?count=10').then(function(response){
    nasdaqDataFactory.stocksDisplay(id).then(function(response){
        console.log(response);
        vm.stock = response;
    });
}