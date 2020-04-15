(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
$scope.name="Kashyap";
$scope.sayHello = function () {
	return "Hello Kashyap!";
};
});

})();