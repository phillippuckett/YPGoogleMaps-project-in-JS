angular.module('sub')
    .controller('mainCtrl', function ($scope, mainSvc) {
        // console.log('mainCtrl');

        $scope.location = "Las Vegas";

        // GET DATA //
        $scope.getYpCtrl = function () {
            mainSvc.getYpSvc($scope.name, $scope.location, $scope.category)
                .then(function (response) {
                    $scope.data = JSON.parse(response.body);
                    // console.log($scope.data);

                    mapData = $scope.data.searchResult.searchListings.searchListing;
                    initMap();
                })
        };
        $scope.getYpCtrl();
        // GET DATA //

        // FILTER //
        $scope.filterLetter = function (letter) {
            var filteredLetter = letter;
            console.log('filter working');
        };
        // FILTER //

    });