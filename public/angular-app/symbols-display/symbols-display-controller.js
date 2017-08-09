angular.module('meannasdaq').controller('SymbolsController', SymbolsController);

function SymbolsController($http, $route, $routeParams, nasdaqDataFactory){
    var vm = this;
    vm.title = 'MEAN Nasdaq App';
    //     $http.get('/api/hotels?count=10').then(function(response){
    nasdaqDataFactory.nasdaqList().then(function(response){
        console.log(response);
        vm.symbols = response;
    });
}