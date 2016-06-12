// angular.module('zhp')
angular.module('zhp', ['angularUtils.directives.dirPagination'])
    .controller('mainCtrl', function ($scope, $http, mainSvc) {
        console.log('mainCtrl');
        
        // 
        $scope.categoryArray = ['American', 'Chinese', 'Italian', 'Mexican', 'Seafood', 'Indian'];
        
        
        

        $scope.location = "Las Vegas";
        $scope.name = "Restaurant";

        $scope.getYpCtrl = function () {
            // console.log($scope.name, $scope.location, $scope.category);
            mainSvc.getYpSvc($scope.name, $scope.location, $scope.category)
                .then(function (response) {
                    $scope.data = JSON.parse(response.body);
                    console.log($scope.data);

                    if (response) {
                        $scope.cityState = !$scope.cityState;
                    }
                })
        };
        // $scope.getYpCtrl();

        $scope.filterLetter = function (letter) {
            var filteredLetter = letter;
            console.log('filter working');
        };

        // $scope.azFilter = function () {
        //     var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        //     $scope.letterArray = letters.split("");
        //     for (var i = 0; i < $scope.letterArray.length; i++) {
        //         $scope.letterArray[i] = { 'letter': $scope.letterArray[i] };
        //     }
        //     // console.log('A - Z INDEX', $scope.letterArray);
        //     $scope.filters = {};
        // };
        // $scope.azFilter();

    });