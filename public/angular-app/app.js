angular.module('meannasdaq', ['ngRoute', 'angular-jwt']).config(config)

function config($httpProvider, $routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $httpProvider
    $routeProvider
    .when('/', {
        templateUrl: 'angular-app/main/main.html',
        access:{
            restricted: false
        }
    })
    .when('/symbols', {
        templateUrl: 'angular-app/symbols-display/symbols.html',
        controller: SymbolsController,
        controllerAs: 'vm',
        access:{
            restricted: false
        }
    })
    .when('/symbol/:id', {
        templateUrl: 'angular-app/stocks-display/stocks.html',
        controller: StocksController,
        controllerAs: 'vm',
        access:{
            restricted: false
        }
    })
    .otherwise({
        redirectTo: '/'
    });
}

