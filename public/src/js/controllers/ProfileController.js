(function(angular){
    "use strict";

    angular.module('Controllers').controller('ProfileController', [function(){
        
        this.showPasswordForm = false;

        this.togglePasswordForm = function(){
            this.showPasswordForm = this.showPasswordForm ? false : true;
        }

    }]);

})(angular);