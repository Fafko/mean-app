(function(angular){
    "use strict";
    
    angular.module('Controllers').controller('IndexController', ['Product', 'products',
        function(Product, products){
            
            var showedProduct = {};
        
            this.products = products || Product.query();
            
            this.toggleDetails = function(product){
                
                if(showedProduct === product){
                    showedProduct.showDesctiption = !!showedProduct.showDesctiption;
                }else{
                    showedProduct.showDesctiption = false;
                    showedProduct = product;
                    showedProduct.showDesctiption = true;
                }
            }
        
    }]);
    
})(angular);