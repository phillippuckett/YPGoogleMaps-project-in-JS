sub.controller('foodCtrl', function ($scope, mainSvc) {
    // console.log('foodCtrl');

    // FOOD NAV //
    $scope.name = "Restaurant";
    $scope.categoryArray = ['Italian', 'American', 'Mexican', 'Japanese', 'Chinese', 'Thai'];
    $scope.defaultCategory = function () {
        $scope.category = $scope.categoryArray[0];
    };
    $scope.defaultCategory();
    // FOOD NAV //

    // GET DATA //
    $scope.getYpFoodCtrl = function () {
        mainSvc.getYpSvc($scope.name, $scope.location, $scope.category)
            .then(function (response) {
                $scope.data = JSON.parse(response.body);
                console.log('API DATA', $scope.data);

                mapData = $scope.data.searchResult.searchListings.searchListing;
                initMap();
            })
    };
    // console.log($scope.category)
    $scope.getYpFoodCtrl();
    // GET DATA //

    // FILTER //
    $scope.filterLetter = function (letter) {
        var filteredLetter = letter;
        // console.log('filter working');
    };
    // FILTER //

});