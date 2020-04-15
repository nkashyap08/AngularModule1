(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.LunchCheck = "";
    $scope.message = "";
    $scope.Check = function () {
        var Lunch = $scope.LunchCheck;
        if (Lunch === "") {
            $scope.msgstyle = { "color": "Red" };
            $scope.message = "Please enter data first";
        }
        else {
            var LC = Lunch.replace(/,\s*$/, "").split(',');
            if (LC.length <= 3) {
                $scope.msgstyle = { "color": "Green" };
                $scope.message = LC.length + " Items. Enjoy!";
            }
            else {
                $scope.msgstyle = { "color": "Green" };
                $scope.message = "Too Much";
            }
        }

    };
}

})();