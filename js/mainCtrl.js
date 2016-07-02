ypGoogleMaps.controller('mainCtrl', function ($scope, mainSvc) {
    // console.log('localCtrl');

    // NAV //
    $scope.name = "Pizza";
    $scope.location = "Salt Lake City";
    $scope.distanceArray = ['84111', '84116', '84121'];
    $scope.defaultDistance = function () {
        $scope.category = $scope.distanceArray[0];
    };
    $scope.defaultDistance();
    // NAV //

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