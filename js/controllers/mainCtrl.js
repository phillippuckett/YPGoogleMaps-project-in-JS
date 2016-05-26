angular.module('zhp')
    .controller('mainCtrl', function ($scope, $http, mainSvc) {

        console.log('CTRL');
        $scope.getYpCtrl = function () {
            // console.log('getYpCtrl');
            mainSvc.getYpSvc($scope.category, $scope.location)
                .then(function (response) {
                    $scope.data = response;
                })
        };

    });