(function(angular){
    'use strict';

    angular.module('Services').factory('ProductsService', ['$resource', 'api', function($resource, api){

        function ProductsService() {
            
            var self = this;
            
            self.products = function(){
                return $resource(api+"products/:id");
            }
            
        }

        return new ProductsService();

    }])

})(angular);