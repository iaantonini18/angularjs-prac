(function() {
    "use strict";

    angular.module('MsgApp', [])
    .controller('MsgController', function ($scope) {
          $scope.name = "Isa";
          $scope.stateOfBeing = "hangry";
          $scope.sayMessage = function() {
              return $scope.name + " likes snaaaacks"
          };
          $scope.feed = function() {
            $scope.stateOfBeing = "happy";
          };
      })
})();
