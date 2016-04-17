(function(angular){
    'use strict';

    var directives = angular.module('Directives');

    directives.directive('spinner', [function(){
        
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="spinner"><span class="spin_element"></span></div>',
            link: function(scope, element, attrs) {
                
                scope.$on('spinner:show', function (event, data) {
                    angular.element(element).addClass('opened');
                });
                
                scope.$on('spinner:hide', function (event, data) {
                    angular.element(element).removeClass('opened');
                });
                
            }
        }

    }]);

})(angular);