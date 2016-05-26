angular.module('zhp')
    .service('mainSvc', function ($http) {

        console.log('SVC');
        this.getYpSvc = function (name, location) {
            // var cuisine = category;
            return $http({
                method: 'GET',
                url: 'http://api.sandbox.yellowapi.com/FindBusiness/?what=Category&where=Location&pgLen=10&pg=1&dist=1&fmt=JSON&lang=en&UID=0000&apikey=7hremc98vmtm6794zfy67hbv',
            })
                .then(function success(response) {
                    console.log(response);
                    return response.data;
                }, function (err) {
                    console.log('Error')
                })
        };

    });