angular.module('zhp')
    .service('mainSvc', function ($http) {

        console.log('RUNNING');
        this.getYpSvc = function (name, location) {
            // var cuisine = category;
            return $http({
                method: 'GET',
                url: 'http://api.sandbox.yellowapi.com/FindBusiness/?what=Restaurants&where=Las+Vegas&pgLen=100&pg=1&dist=1&fmt=JSON&lang=en&UID=000&apikey=7hremc98vmtm6794zfy67hbv',
            })
                .then(function success(response) {
                    console.log(response);
                    return response.data;
                }, function (err) {
                    console.log('Error')
                })
        };

    });