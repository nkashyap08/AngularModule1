(function () {
    'use strict';

    angular.module('CustomFilterCheck', [])

    .controller('FilterCheckController', FilterCheckController)
    .filter('replace', ReplaceFilter);

    FilterCheckController.$inject = ['$scope', '$filter', 'replaceFilter'];
    function FilterCheckController($scope, $filter, replaceFilter) {
        $scope.FilterCheck = "";
        $scope.name = "";
        $scope.message = "";
        $scope.Check = function () {
            var Filter = $scope.FilterCheck;
            if (Filter === "") {
                $scope.msgstyle = { "color": "Red" };
                var msg = "Please enter data first";
                var output = $filter('uppercase')(msg);
                //$scope.message = "Please enter data first";
                $scope.message = output;
                $scope.name = "";
            }
            else {
                $scope.message = "";
                $scope.namestyle = { "color": "Green" };
                var msg = "Hi!! " + $scope.FilterCheck;
                $scope.name = replaceFilter(msg);
            }

        };
        
    }
    function ReplaceFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("Hi!!", "HELLO!!");
            return input;
        };
    }
})();