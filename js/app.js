var ypGoogleMaps = angular.module('ypGoogleMaps', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('main', {
                url: '/main',
                templateUrl: '/main.html',
                controller: 'mainCtrl'
            })

        $urlRouterProvider.otherwise('/main');

        ypGoogleMaps.run(function ($rootScope) {
            $rootScope.$on("$stateChangeError", console.log.bind(console)); });

    });

    
