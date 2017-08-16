angular.module('meannasdaq').controller('SymbolsController', SymbolsController);

function SymbolsController($http, $route, $routeParams, nasdaqDataFactory) {
    var vm = this;
    vm.title = 'MEAN Nasdaq App';
    vm.symbols;
    vm.symbol;
    nasdaqDataFactory.nasdaqList().then(function(response) {
        var res = [];
        for (var i = 0; i < response.length; i++) {
            res.push(response[i]['Symbol'])
        }
        vm.symbols = res;
        sendToPage(vm.symbols)
    });

    function sendToPage(tickSymbol) {

        var tickSymbols = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: tickSymbol
        });

        $('.typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'symbols',
            source: tickSymbols
        });
    }
    $('#tickerSymbolForm').submit(function() {
        event.preventDefault()

        vm.symbol = $('#myInput').val()
        console.log(vm.symbol)

    })
}