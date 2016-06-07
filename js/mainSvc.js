angular.module('zhp')
    .service('mainSvc', function ($http) {

        console.log('RUNNING');
        this.getYpSvc = function (name, location) {
            // var cuisine = category;
            return $http({
                method: 'POST',
                url: '/apiCall',
                data: { results: 'data' }
            })
                .then(function success(response) {
                    console.log(response);
                    return response.data;
                }, function (err) {
                    console.log('Error')
                })
        };

    });