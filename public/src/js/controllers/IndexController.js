(function(angular){
    "use strict";
    
    angular.module('Controllers').controller('IndexController', ['ProductsService', 
        function(ProductsService){
        
            this.products = ProductsService.products().query();
        
    }]);
    
})(angular);