// angular.module('zhp')
angular.module('zhp', ['angularUtils.directives.dirPagination'])
    .controller('mainCtrl', function ($scope, $http, mainSvc) {
        console.log('RUNNING');
        $scope.getYpCtrl = function () {
            console.log('getYpCtrl');

            // API DOWNLOAD //            

            // SEARCH // (categories, locations)
            mainSvc.getYpSvc($scope.category, $scope.location)
                .then(function (response) {
                    $scope.data = response;
                })
        };
            $scope.getYpCtrl();

        // POPULAR CUISINES // (mostPopular to leastPopular filter)

        // AZ INDEX // (yellowApi)
        $scope.azFilter = function () {
            var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            $scope.letterArray = letters.split("");
            for (var i = 0; i < $scope.letterArray.length; i++) {
                $scope.letterArray[i] = { 'letter': $scope.letterArray[i] };
            }
            console.log($scope.letterArray);
            $scope.filters = {};
        };

        $scope.azFilter();

        $scope.filterLetter = function (letter) {
            var filteredLetter = letter;
            console.log('filter working');
        };

        // PAGINATION : SEARCH RESULTS // (12resultsPerPage, yellowApi)

        // GOOGLE MAPS DIRECTIVE // (googleMapsApi, yellowApi)

        // CUISINE FUNCTIONS //

        // UIDs (maybe)//

    });