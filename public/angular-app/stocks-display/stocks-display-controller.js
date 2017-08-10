angular.module('meannasdaq').controller('StocksController', StocksController);

function StocksController($route, $routeParams, nasdaqDataFactory){
    var vm = this;
    var id = $routeParams.id;
    console.log('getting stock by symbol', id)
    vm.title = 'MEAN Nasdaq App';

    var url = 'https://www.alphavantage.co/query?';
    var data = {function: 'TIME_SERIES_DAILY', symbol: id, apikey: '8GZR3OKD6QR2ATR1'};
    $.ajax({
        url: url,
        data: data,
        type: 'GET',
        success: function(res){
            vm.data = res['Metadata'];
            vm.series = res['Time Series(Daily)'];

            console.log(res)
            
        }
    });
    // nasdaqDataFactory.stocksDisplay(id).then(function(response){
    //     console.log(response);
    //     vm.stock = response;
    // });
}