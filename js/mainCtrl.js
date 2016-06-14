// angular.module('zhp')
angular.module('zhp', ['angularUtils.directives.dirPagination'])
    .controller('mainCtrl', function ($scope, $http, mainSvc) {
        console.log('mainCtrl');

        // ng-options drop menu for top food categories
        $scope.categoryArray = ['Italian', 'American', 'Mexican', 'Japanese', 'Chinese', 'Thai'];

        // input parameters for Restaurants Name and Location
        $scope.location = "Las Vegas";
        $scope.name = "Restaurant";

        // A function that invokes upon loading the page, containing a default value
        $scope.defaultCategory = function () {
            $scope.category = $scope.categoryArray[1];
        };
        $scope.defaultCategory();

        // GET data from ypApi
        $scope.getYpCtrl = function () {
            mainSvc.getYpSvc($scope.name, $scope.location, $scope.category)
                .then(function (response) {
                    $scope.data = JSON.parse(response.body);

                    // to see what API data we are getting back
                    console.log($scope.data);

                    //set up data for googleMaps markers then call map
                    mapData = $scope.data.searchResult.searchListings.searchListing;
                    initMap();

                    // "Searching all Food and Restaurants near city, st"
                    if (response) {
                        $scope.cityState = !$scope.cityState;
                    }
                })
        };
        $scope.getYpCtrl();

        $scope.filterLetter = function (letter) {
            var filteredLetter = letter;
            console.log('filter working');
        };

    });






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