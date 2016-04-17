(function(angular){
    'use strict';

    angular.module('Services').factory('Product', ['$resource', 'api', function($resource, api){
        
        return $resource(api+"products/:id");
        
    }])

})(angular);