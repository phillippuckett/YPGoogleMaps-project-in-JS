angular.module('zhp')
    .directive('mainDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/mainTmpl.html',
            controller: function ($scope) {
                $scope.mainDir = 'mainDir';
                console.log('RUNNING');
            }
        }
    });