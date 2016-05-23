angular.module('zipHubProject')
    .service('mainSvc', function ($http) {

        this.getYpSvc = function () {
            return $http.get('api/sexytime')
                .then(function (response) {
                    console.log(response);
                    // return response;
                })
        };
        
        
        
    });