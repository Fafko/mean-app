(function(angular){
    'use strict';

    angular.module('Services')
        
    .factory('UserService', ['$q', '$location', '$rootScope', function($q, $location){

        function UserService() {

                var self = this,
                    _user = null;
                
                self.logout = function(){
                    _user = null;
                    $location.path('/login');
                };
                
                self.login = function(){
                    _user = {};
                    $location.path('/');
                };
                
                self.getUser = function(){
                    return _user;
                };

                self.isLogged = function(){
                    var deferred = $q.defer();
                    if(_user){
                        deferred.resolve();
                        console.log('user resolved', _user);
                    }else{
                        deferred.reject();
                        $location.path('/login');
                        console.log('user rejected', _user);
                    }

                    return deferred.promise;
                };

            }

        return new UserService();

    }])
    
})(angular);