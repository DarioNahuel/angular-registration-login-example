(function () {
    'use strict';

    angular
        .module('app')
        .directive('matchPassword', function (){
          return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elem, attr, ctrl) {

                //For DOM -> model validation
                ctrl.$validators.matchPassword = function(modelValue, viewValue) {
                  if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                  }
                  if (viewValue.length > scope.vm.user.password.length) {
                    return false;
                  }
                  return viewValue === scope.vm.user.password.substr(0,viewValue.length);
                };

            }
          };
        });

})();