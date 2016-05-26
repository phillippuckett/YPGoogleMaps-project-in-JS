angular.module('zhp')
  .directive('mapDir', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/mapTmpl.html',
      controller: function ($scope) {
        $scope.mapDir = 'MAP';
        console.log('MAP', mapDir);
        // var map;
        // var initMap = function () {
        //   map = new google.maps.Map(document.getElementById('map'), {
        //     center: { lat: -34.397, lng: 150.644 },
        //     zoom: 8
        //   })
        // };

      }
    }
  });
