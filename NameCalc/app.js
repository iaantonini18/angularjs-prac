(function () {
    "use strict";

    angular.module('NameCalc', [])

        .controller('NameCalcController', function ($scope) {
            $scope.name = "";
            $scope.totalVal = "0";

            $scope.displayNum = function () {
                var totalNameVal = calculateVal($scope.name);
                $scope.totalVal = totalNameVal;
            };

            function calculateVal(name) {
                var totalStringVal = 0;
                for (var i = 0; i < name.length; i++) {
                    totalStringVal += name.charCodeAt(i);
                }
                return totalStringVal;
            }

        });

})();