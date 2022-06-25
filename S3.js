var app = angular
            .module("myModule", [])
            .controller("myController", function ($scope) {
                $scope.message = "Hello Angular"
            });



//script4
var app = angular
            .module("myModule", [])
            .controller("myController", function ($scope) {
                var employee = {
                    firstName: "Ben",
                    lastName: "Hastings",
                    gender: "Male"
                };

                $scope.employee = employee;
            });

//script5
var app = angular
            .module("myModule", [])
            .controller("myController", function ($scope) {

                var employees = [
                    { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000 },
                    { firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000 },
                    { firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000 },
                    { firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 53000 },
                    { firstName: "Todd", lastName: "Barber", gender: "Male", salary: 60000 }
                ];

                $scope.employees = employees;
            });

//script10
var app = angular
            .module("Demo", [])
            .controller("redColourController", function ($scope, $rootScope) {
                $rootScope.rootScopeColour = "I am Root Scope Colour";
                $scope.redColour = "I am Red Colour";
            })
            .controller("greenColourController", function ($scope) {
                $scope.greenColour = "I am Green Colour";
            })

