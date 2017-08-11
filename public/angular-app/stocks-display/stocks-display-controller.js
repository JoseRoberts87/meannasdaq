angular.module('meannasdaq').controller('StocksController', StocksController);

function StocksController($route, $http, $routeParams, nasdaqDataFactory){
    var vm = this;
    var id = $routeParams.id;
    console.log('getting stock by symbol', id)
   
    nasdaqDataFactory.stocksDisplay(id).then(function(response){
        console.log(response['Time Series (Daily)']);
        vm.data = response['Meta Data'];
        vm.series = response['Time Series (Daily)'];
    });
}
    // vm.title = 'MEAN Nasdaq Stock View';

//     var url = 'https://www.alphavantage.co/query?';
//     var data = {function: 'TIME_SERIES_DAILY', symbol: id, apikey: '8GZR3OKD6QR2ATR1'};
    
//     var res = function(){
//         var temp = $.ajax({
//         async: false,
//         url: url,
//         data: data,
//         type: 'GET',
//         success: function(res){
//             temp = res;
//         }
//     });
//     return temp.responseJSON;
// }(); 