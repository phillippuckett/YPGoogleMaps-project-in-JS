angular.module('zipHubProject')
    .controller('mainCtrl', function ($scope, $http, mainSvc) {

        console.log('CTRL');
        $scope.getYpCtrl = function () {
            console.log('functioning');
            mainSvc.getYpSvc($scope.name, $scope.location)
                .then(function (response) {
                    $scope.data = response;
                })
        };

    });