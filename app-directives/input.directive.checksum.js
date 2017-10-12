(function () {
    'use strict';

    angular
        .module('app')
        .directive('checksum', function (){
          return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elem, attr, ctrl) {

                //For DOM -> model validation
                ctrl.$validators.checksum = function(modelValue, viewValue) {
                  if (ctrl.$isEmpty(modelValue) || viewValue.length < 9) {
                    // consider empty models or not minnimun length to be valid
                    return true;
                  }
                  if (viewValue.length > 9) {
                    return false;
                  }

                  // check ID
                  var id = viewValue.split("");
                  var checksumDigit = parseInt(id.pop());
                  var checksum = id.reduce(function(a,b){
                    return parseInt(a) + parseInt(b);
                  },0);

                  return checksum % 7 === checksumDigit;
                };

            }
          };
        });

})();