var router = function($routeProvider, checkAuthProvider) {
        
    $routeProvider
        .when('/404', {
            templateUrl: 'templates/404.html'
        })
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController',
            controllerAs: 'LoginCtrl'
        })
        .when('/registration', {
            templateUrl: 'templates/registration.html',
            controller: 'RegistrationController',
            controllerAs: 'RegistrationCtrl'
        })
        .when('/manage/:id?', {
            templateUrl: 'templates/manage.html',
            controller: 'ManageController',
            controllerAs: 'ManageCtrl',
            resolve: {
                isLogged: checkAuthProvider.$get().isLogged
            }
        })
        .when('/profile', {
            templateUrl: 'templates/profile.html',
            controller: 'ProfileController as ProfileCtrl',
            resolve: {
                isLogged: checkAuthProvider.$get().isLogged
            }
        })
        .when('/', {
            templateUrl: 'templates/index.html',
            controller: 'IndexController',
            controllerAs: 'IndexCtrl',
            resolve: {
                isLogged: checkAuthProvider.$get().isLogged
            }
        })
        .otherwise({
            redirectTo:'/404'
        });
};

app.config(['$routeProvider', 'checkAuthProvider', router]);