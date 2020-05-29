(function() {
    "use strict";

    angular.module('MsgApp', []);

    angular.module('MsgApp').filter('hates', function () {
        return function(input) {
          input = input || "";
          input = input.replace("likes","hates");
          return input;
        };
      });

      angular.module('MsgApp').filter('loves', function () {
          return function(input) {
            input = input || "";
            input = input.replace("likes","loves");
            return input;
          };
        });

    angular.module('MsgApp').controller('MsgController',
    function($scope, $filter, hatesFilter, lovesFilter) {
          $scope.name = "Isa";
          $scope.stateOfBeing = "hangry";
          $scope.snackCount = 0;
          $scope.sayMessage = function() {
            var msg = $scope.name + " likes snaaaacks";
              return msg;
          };

          // $scope.sayHatesMessage = function() {
          //   var msg = $scope.name + " likes snaaaacks";
          //   msg = hatesFilter(msg);
          //     return msg;
          // };
          //
          // $scope.sayLovesMessage = function() {
          //   var msg = $scope.name + " likes snaaaacks";
          //   msg = lovesFilter(msg);
          //     return msg;
          // };

          $scope.feed = function() {
            $scope.snackCount ++;
            if ($scope.snackCount > 10) {
              $scope.stateOfBeing = "fat";
            } else if ($scope.snackCount > 0 && $scope.stateOfBeing != "happy") {
              $scope.stateOfBeing = "happy";
            }
          };
          $scope.unfeed = function() {
            $scope.snackCount--;
            if ($scope.snackCount < 1) {
              $scope.stateOfBeing = "hangry";
            } else {
              $scope.stateOfBeing = "angry";
            }
          };
      })
})();
