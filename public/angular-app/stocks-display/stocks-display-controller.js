angular.module('meannasdaq').controller('StocksController', StocksController);

function StocksController($route, $routeParams, nasdaqDataFactory){
    var vm = this;
    var id = $routeParams.id;
    console.log('getting stock by symbol', id)
    vm.title = 'MEAN Nasdaq App';
    nasdaqDataFactory.stocksDisplay(id).then(function(response){
        console.log(response);
        vm.stock = response;
    });
}