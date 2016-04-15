(function(angular){
    "use strict";

    angular.module('Controllers').controller('ManageController', ['$routeParams', 'ProductsService', 
        function($routeParams, ProductsService){
            
        this.mode = $routeParams.id ? 'Update' : 'Create';
            
    }]);

})(angular);