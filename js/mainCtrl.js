ypGoogleMaps.controller('mainCtrl', function ($scope, mainSvc) {
    // console.log('localCtrl');



    // NAV // Placeholders being used for beta testing purposes
    $scope.name = "Grocer";
    $scope.location = "Salt Lake City";
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



    // KEY 13//
    $scope.onKeypress = function (event) {
        switch (event.keyCode) {
            case 13:
                $scope.key13 = true;
                // console.log('KEY 13', $scope.key13);
                $scope.getYpCtrl();
                break;
        }
    };
    //KEY 13//



    // FILTER //
    $scope.filterLetter = function (letter) {
        var filteredLetter = letter;
        console.log('filter working');
    };
    // FILTER //

});