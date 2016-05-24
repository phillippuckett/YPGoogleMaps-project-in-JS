angular.module('zipHubProject')
    .service('mainSvc', function ($http) {

        console.log('SVC');
        this.getYpSvc = function (name, location) {
            return $http({
                method: 'GET',
                // url: 'www.google.com'
                url: 'http://api.sandbox.yellowapi.com/FindBusiness/?what=Restaurants&where=Las+Vegas&pgLen=5&pg=1&dist=1&fmt=JSON&lang=en&UID=0000&apikey=7hremc98vmtm6794zfy67hbv',
                // headers: { 'X-Originating-Ip': '66.232.90.106' }
            })
                .then(function success(response) {
                    console.log(response);
                    return response.data;
                }, function (err) {
                    console.log('there was error')
                })
        };

    });