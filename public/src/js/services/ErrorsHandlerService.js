(function(angular){
    'use strict';

    angular.module('Services').factory('ErrorsHandlerService', [function(){

        function ErrorsHandlerService() {

            var self = this;

            self.removeServerErrors = function(form, model){
                angular.forEach(model, function(key) {
                    if(form[key] && form[key].$error && form[key].$error.server){
                        delete form[key].$error.server;
                    }
                });
            };
        }

        return new ErrorsHandlerService();

    }])

})(angular);