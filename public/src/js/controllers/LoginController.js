(function(angular){
    "use strict";

    angular.module('Controllers').controller('LoginController', ['UserService', function(UserService){

        this.login = UserService.login;

    }]);

})(angular);