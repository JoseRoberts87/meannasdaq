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
        return $http.get('/api/symbols/' + id).then(complete).catch(failed);
    }

    function complete(response){
        return response.data;
    }

    function failed(error){
        console.log(error.statusText);
    }

}