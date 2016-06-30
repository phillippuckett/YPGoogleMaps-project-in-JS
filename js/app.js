// 'angularUtils.directives.dirPagination'
var sub = angular.module('sub', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: '/html/home.html',
                controller: 'mainCtrl'
            })

            .state('food_&_restaurants', {
                url: '/food_&_restaurants',
                templateUrl: 'html/food.html',
                controller: 'foodCtrl'
            })

            .state('local', {
                url: '/local',
                templateUrl: 'html/local.html',
                controller: 'localCtrl'
            })

            .state('business_to_business', {
                url: '/business_to_business',
                templateUrl: 'html/business.html',
                controller: 'busiCtrl'
            })

        $urlRouterProvider.otherwise('/home');

        sub.run(function ($rootScope) {
            $rootScope.$on("$stateChangeError", console.log.bind(console)); });

    });

    
