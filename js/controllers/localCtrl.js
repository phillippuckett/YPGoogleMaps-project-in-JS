sub.controller('localCtrl', function ($scope, mainSvc) {
    // console.log('localCtrl');

    // LOCAL NAV //
    $scope.name = "Local";
    $scope.categoryArray = ['Find People', 'Featured', 'Automotive', 'Home Improvement', 'Health & Wellness', 'Attorney'];
    $scope.defaultCategory = function () {
        $scope.category = $scope.categoryArray[4];
    };
    $scope.defaultCategory();
    // LOCAL NAV //

    // GET DATA //
    $scope.getYpLocalCtrl = function () {
        mainSvc.getYpSvc($scope.name, $scope.location, $scope.category)
            .then(function (response) {
                $scope.data = JSON.parse(response.body);
                console.log('API DATA', $scope.data);

                mapData = $scope.data.searchResult.searchListings.searchListing;
                initMap();
            })
    };
    // console.log($scope.category)
    $scope.getYpLocalCtrl();
    // GET DATA //

    // FILTER //
    $scope.filterLetter = function (letter) {
        var filteredLetter = letter;
        // console.log('filter working');
    };
    // FILTER //

});