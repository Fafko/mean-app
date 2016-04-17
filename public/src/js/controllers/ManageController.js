(function(angular){
    "use strict";

    angular.module('Controllers').controller('ManageController', ['$routeParams', 'Product', 'ErrorsHandlerService', '$rootScope',
        function($routeParams, Product, ErrorsHandlerService, $rootScope){
            
        this.mode = $routeParams.id ? 'Update' : 'Create';
            
        
            
        var createProduct = function(_product, form){
            $rootScope.$broadcast('spinner:show');

            var  product = new Product();
            
            product.data = _product;
            
            product.$save();
            
        };
            
            
        this.processProduct = function($event, product, form){
            $event.preventDefault();
            
            var fields = [
                'name',
                'price',
                'description'
            ];
            
            ErrorsHandlerService.removeServerErrors(form, fields);

            if(form.$valid) {
                (this.mode == 'Create') ? 
                    createProduct(product, form) : 
                    updateProduct(product, form);
            }
            
        }
            
    }]);

})(angular);