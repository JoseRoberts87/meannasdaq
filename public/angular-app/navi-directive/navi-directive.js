angular.module('meannasdaq').directive('mhNavi', mhNavi);

function mhNavi(){
    return{
        restrict: 'E',
        templateUrl: 'angular-app/navi-directive/navi-directive.html'
    };
}
