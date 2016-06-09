angular.module('zhp')
    .service('mainSvc', function ($http) {

        console.log('mainSvc');
        
        this.getYpSvc = function (name, location, cuisine) {
            
            console.log(name)
            console.log(location)
            console.log(cuisine)
            
            var searchTerm = name + " " + cuisine;
            return $http({
                method: 'POST',
                url: '/apiCall',
                data: {
                    searchTerm: searchTerm,
                    location: location
                }
            })
                .then(function success(response) {
                    console.log('API DATA');
                    return response.data;
                }, function (err) {
                    console.log('Error')
                })
        };

    });