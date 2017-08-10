angular.module('meannasdaq').controller('SymbolsController', SymbolsController);

function SymbolsController($http, $route, $routeParams, nasdaqDataFactory){
    var vm = this;
    vm.title = 'MEAN Nasdaq App';
    nasdaqDataFactory.nasdaqList().then(function(response){
        console.log(response);
        vm.symbols = response;
    });
}