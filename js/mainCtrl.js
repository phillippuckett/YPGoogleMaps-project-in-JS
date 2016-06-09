// angular.module('zhp')
angular.module('zhp', ['angularUtils.directives.dirPagination'])
    .controller('mainCtrl', function ($scope, $http, mainSvc) {
        console.log('mainCtrl');
        $scope.getYpCtrl = function () {
            console.log($scope.name, $scope.location, $scope.cuisine);
            mainSvc.getYpSvc($scope.name, $scope.location, $scope.cuisine)
                .then(function (response) {
                    $scope.data = JSON.parse(response.body)
                    console.log($scope.data);
                    
                    if (response) {
                        $scope.cityState = !$scope.cityState;
                    }
                })
        };

        // AZ INDEX //
        $scope.azFilter = function () {
            var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            $scope.letterArray = letters.split("");
            for (var i = 0; i < $scope.letterArray.length; i++) {
                $scope.letterArray[i] = { 'letter': $scope.letterArray[i] };
            }
            // console.log('A - Z INDEX', $scope.letterArray);
            $scope.filters = {};
        };

        $scope.azFilter();

        $scope.filterLetter = function (letter) {
            var filteredLetter = letter;
            console.log('filter working');
        };

        // GOOGLE MAPS DIRECTIVE //

    });