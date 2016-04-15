(function(angular){
    'use strict';

    var directives = angular.module('Directives');

    directives.directive('header', [function(){

        return {
            restrict: 'E',
            templateUrl: 'templates/parts/header.html',
            replace: true,
            controllerAs: 'HeaderCtrl',
            controller: ['UserService', '$rootScope', function(UserService){
                
                var self = this;
                self.logged = UserService.getUser();
                
                this.logout = UserService.logout;
                
            }],
            link: function(){}
        }

    }]);


})(angular);