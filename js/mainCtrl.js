angular.module('zipHubProject')
    .controller('mainCtrl', function ($scope, mainSvc) {

        $scope.getYpCtrl = function () {
            mainSvc.getYpSvc($scope.name, $scope.location)
            .then()
        };
        
        

    });