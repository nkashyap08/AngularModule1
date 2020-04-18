(function () {
    'use strict';

    angular.module('SyntaxController', [])
    .controller('ParentController', ParentController)
    .controller('ChildController', ChildController);

    function ParentController() {
        var parent = this;
        parent.value = 1;
    }

    function ChildController() {
        var child = this;
        child.value = 5;
    }

})();