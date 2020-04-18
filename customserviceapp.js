(function () {
    'use strict';

    angular.module('EmployeeListApp', [])
    .controller('EmployeeListAddController', EmployeeListAddController)
    .controller('EmployeeListShowController', EmployeeListShowController)
    .service('EmployeeListService', EmployeeListService);

    EmployeeListAddController.$inject = ['EmployeeListService'];
    function EmployeeListAddController(EmployeeListService) {
        var itemAdder = this;
        itemAdder.itemName = "";
        itemAdder.itemqualification = "";
        itemAdder.addItem = function () {
            EmployeeListService.addItem(itemAdder.itemName, itemAdder.itemqualification);
        }
    }

    EmployeeListShowController.$inject = ['EmployeeListService'];
    function EmployeeListShowController(EmployeeListService) {
        var showList = this;
        showList.items = EmployeeListService.getItems();
        showList.removeItem = function (itemIndex) {
            EmployeeListService.removeItem(itemIndex);
        };
    }



    function EmployeeListService() {
        var service = this;
        var items = [];
        service.addItem = function (itemName, qualification) {
            var item = {
                name: itemName,
                qualification: qualification
            };
            items.push(item);
        };
        service.removeItem = function (itemIndex) {
            items.splice(itemIndex, 1);
        };
        service.getItems = function () {
            return items;
        };
    };

})();