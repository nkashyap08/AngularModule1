(function () {
    'use strict';

    angular.module('FilterCheck', [])

    .controller('FilterCheckController', FilterCheckController);

    FilterCheckController.$inject = ['$scope', '$filter'];
    function FilterCheckController($scope, $filter) {
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
                    $scope.name = "Hi!! " + $scope.FilterCheck;
                
            }

        };
    }

})();