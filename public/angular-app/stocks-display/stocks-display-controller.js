angular.module('meannasdaq').controller('StocksController', StocksController);

function StocksController($routeParams, nasdaqDataFactory) {
    var vm = this;
    var id = $routeParams.id;
    console.log('getting stock by symbol', id);

    nasdaqDataFactory.stocksDisplay(id).then(function(response) {
        console.log(response['Time Series (Daily)']);
        vm.data = response['Meta Data'];
        vm.series = response['Time Series (Daily)'];
    });
}