(function() {
    "use strict";

    angular.module('MyFirstApp',[])
    .controller('MyFirstController', function ($scope) {
        $scope.name="Isa"
        $scope.sayHello = function () {
            return "Hello " + $scope.name;
        }

    });

})();
