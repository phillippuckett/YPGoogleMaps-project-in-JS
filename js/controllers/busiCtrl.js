angular.module('sub')
    .controller('busiCtrl', function ($scope, mainSvc) {
        // console.log('busiCtrl');

        // BUSI NAV //
        $scope.name = "Business";
        $scope.categoryArray = ['Medical', 'Finance', 'Dental', 'Realty', 'Law Firm'];
        $scope.defaultCategory = function () {
            $scope.category = $scope.categoryArray[0];
        };
        $scope.defaultCategory();
        // BUSI NAV //

        // GET DATA //
        $scope.getYpBusiCtrl = function () {
            mainSvc.getYpSvc($scope.name, $scope.location, $scope.category)
                .then(function (response) {
                    $scope.data = JSON.parse(response.body);
                    console.log('API DATA', $scope.data);

                    mapData = $scope.data.searchResult.searchListings.searchListing;
                    initMap();
                })
        };
        // console.log($scope.category)
        $scope.getYpBusiCtrl();
        // GET DATA //

        // FILTER //
        $scope.filterLetter = function (letter) {
            var filteredLetter = letter;
            console.log('filter working');
        };
        // FILTER //

    });