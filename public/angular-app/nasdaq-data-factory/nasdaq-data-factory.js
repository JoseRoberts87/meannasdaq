angular.module('meannasdaq').factory('nasdaqDataFactory', nasdaqDataFactory);

function nasdaqDataFactory($http){
    return{
        nasdaqList: nasdaqList,
        stocksDisplay: stocksDisplay
    };

    function nasdaqList(){
        return $http.get('/api/symbols?count=10').then(complete).catch(failed);
    }

    function stocksDisplay(id){
        var apikey ='apikey=8GZR3OKD6QR2ATR1';
        var func = 'function=TIME_SERIES_DAILY&';
        var symbol = 'symbol='+id+'&'
        var url = 'https://www.alphavantage.co/query?';
        return $http.get(url+func+symbol+apikey).then(complete).catch(failed);
    }

    function complete(response){
        return response.data;
    }

    function failed(error){
        console.log(error.statusText);
    }

}