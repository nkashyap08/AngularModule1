(function () {
    'use strict';

    var employeeList1 = [
        "Mr.Ancy Thomas", "Mr.Raghavan.K.S", "Mr.Amit Kumar Jha", "Mrs.Ghazala Sultana", "Mr.Kashyap.N"
    ];

    var employeeList2 = [
        {
            name: "Mr.Ancy Thomas",
            qualification: "MCA"
        },
        {
            name: "Mr.Raghavan.K.S",
            qualification: "MCA"
        },
        {
            name: "Mr.Amit Kumar Jha",
            qualification: "M.Sc"
        },
        {
            name: "Mrs.Ghazala Sultana",
            qualification: "BE"
        },
        {
            name: "Mr.Kashyap.N",
            qualification: "MCA"
        }
    ];
    angular.module('EmployeeListApp', [])

    .controller('EmployeeListController', EmployeeListController);

    EmployeeListController.$inject = ['$scope'];
    function EmployeeListController($scope) {
        $scope.employeeList1 = employeeList1;
        $scope.employeeList2 = employeeList2;

        $scope.addToList = function () {
            var newItem = {
                name: $scope.newName,
                qualification: $scope.newqualification
            };
            $scope.employeeList2.push(newItem);
        };
    }

})();