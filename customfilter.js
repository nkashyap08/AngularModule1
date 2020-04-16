(function () {
    'use strict';

    angular.module('CustomFilterCheck', [])

    .controller('FilterCheckController', FilterCheckController)
    .filter('replace', ReplaceFilter)
    .filter('namaste', NamasteFilter);

    FilterCheckController.$inject = ['$scope', '$filter', 'replaceFilter'];
    function FilterCheckController($scope, $filter, replaceFilter) {
        $scope.FilterCheck = "";
        $scope.orgname = "";
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
                $scope.orgname = "Hi!! " + $scope.FilterCheck;
                var msg = "Hi!! " + $scope.FilterCheck;
                $scope.name = replaceFilter(msg);
            }

        };
        
    }
    //CustomFilter
    function ReplaceFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("Hi!!", "HELLO!!");
            return input;
        };
    }
    //CustomFilter With Argument
    function NamasteFilter() {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        };
    }
})();