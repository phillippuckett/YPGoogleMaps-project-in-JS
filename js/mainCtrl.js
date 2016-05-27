angular.module('zhp')
    .controller('mainCtrl', function ($scope, $http, mainSvc) {
        console.log('RUNNING');
        $scope.getYpCtrl = function () {
            console.log('getYpCtrl');

            // TITLE // (static)

            // SEARCH // (categories, locations)
            mainSvc.getYpSvc($scope.category, $scope.location)
                .then(function (response) {
                    $scope.data = response;
                })

            // POPULAR CUISINES // (mostPopular tp leastPopular)

            // AZ INDEX // (yellowApi)

            // PAGINATION : SEARCH RESULTS // (12resultsPerPage, yellowApi)

            // GOOGLE MAPS DIRECTIVE // (googleMapsApi, yellowApi)

            // CUISINE FUNCTIONS //

            // UIDs (maybe)//
        };

    });