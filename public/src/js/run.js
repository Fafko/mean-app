"use strict";

app
    
.run(['$rootScope', function($rootScope){
        
        $rootScope.$on( "$routeChangeStart", function() {
            $rootScope.$broadcast('spinner:show');
        });
        
        $rootScope.$on( "$routeChangeSuccess", function() {
            $rootScope.$broadcast('spinner:hide');
        });
        
}])
.constant('api', '/api/');