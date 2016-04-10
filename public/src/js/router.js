var router = function($routeProvider) {
        
    $routeProvider
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'RegisterController'
        })
        .when('/404', {
            templateUrl: 'templates/404.html',
            controller: 'NotFoundController'
        })
        .when('/create', {
            templateUrl: 'templates/manage.html',
            controller: 'ManageController'
        })
        .when('/update', {
            templateUrl: 'templates/manage.html',
            controller: 'ManageController'
        })
        .when('/profile', {
            templateUrl: 'templates/profile.html',
            controller: 'ProfileController'
        })
        .when('/', {
            templateUrl: 'templates/index.html',
            controller: 'IndexController'
        })
        .otherwise({
            redirectTo:'/404'
        });
};

app.config(['$routeProvider', router]);