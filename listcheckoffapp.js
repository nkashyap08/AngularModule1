﻿(function () {
    'use strict';

    var toBuyList = [
        { name: "Rice", quantity: "20 kgs"},
        { name: "Oil", quantity: "10 Ltrs" },
        { name: "Biscuit", quantity: "30 packs" },
        { name: "Energy Drink", quantity: "2 bottles" },
        { name: "Chips", quantity: "5 packs" }
    ];

    var boughtList = [];


    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyCtrl = this;
        toBuyCtrl.items = ShoppingListCheckOffService.getItemsToBuy();
        toBuyCtrl.bought = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtCtrl = this;
        boughtCtrl.items = ShoppingListCheckOffService.getBougthItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items to buy
        var itemsToBuy = toBuyList;
        // List of shopping items bought
        var boughtItems = boughtList;

        //Move item to bougth list
        service.buyItem = function (itemIndex) {
            var item = itemsToBuy[itemIndex];
            service.addBoughtItem(item);
            removeFromItemsToBuy(itemIndex);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getBougthItems = function () {
            return boughtItems;
        };

        service.addBoughtItem = function (item) {
            boughtItems.push(item);
        };

        //private functions
        function removeFromItemsToBuy(itemIndex) {
            itemsToBuy.splice(itemIndex, 1);
        };
    }

})();