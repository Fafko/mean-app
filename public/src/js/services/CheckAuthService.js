(function(angular){
    'use strict';

    angular.module('Services')
        
        // Proxy service for dealing with one instance of UserService in whole app, 
        // cause of in router config we should use only providers, but UserServiceProvider returns 
        // new instance of UserService. So now checkAuthProvider returns the same instance of UserService as we need
        .factory('checkAuth', ['UserService', function(UserService){ 
            return UserService;
        }])

})(angular);