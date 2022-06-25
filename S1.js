var myApp = angular.module("myModule", [])
var myController = function ($scope) {
    $scope.message = "AngularJS Tutorial";
}
myApp.controller("myController", myController);
var myApp = angular
    .module("myModule", []).controller("myController", function ($scope)
    {
        var employee = {
            firstName: 'Mark',
            lastName: 'Hastings',
            gender: 'Male'
        };
        $scope.employee = employee;
    });