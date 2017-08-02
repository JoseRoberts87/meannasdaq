angular.module('meannasdaq', ['ngRoute', 'angular-jwt']).config(config).run(run);

function config($httpProvider, $routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $httpProvider.interceptors.push(AuthInterceptor)
    $routeProvider
    .when('/', {
        templateUrl: 'angular-app/main/main.html',
        access:{
            restricted: false
        }
    })
    .when('/symbols', {
        templateUrl: 'angular-app/symbols-list/symbols.html',
        controller: sym,
        controllerAs: 'vm',
        access:{
            restricted: false
        }
    })
    .when('/symbol/:id', {
        templateUrl: 'angular-app/stocks-display/stocks.html',
        controller: HotelController,
        controllerAs: 'vm',
        access:{
            restricted: false
        }
    })
    .otherwise({
        redirectTo: '/'
    });
}

function run($rootScope, $location, $window, AuthFactory){
    $rootScope.$on('$rootChangeStart', function(event, nextRoute, currentRoute){
        if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn){
            event.preventDefault();
            $location.path('/');
        }
    })
}