var app=angular.module("myApp",[])
var app=angular.module("myApp",["ngRoute"])
app.config(function($routeProvider){
    $routeProvider

    .when("/",{
        templateUrl: "./first.html",
        controller: "FirstController"
    })

    .when("/second",{
        templateUrl: "./second.html",
        controller: "SecondController"
    })

    .when("/third",{
        templateUrl: "./third.html",
        controller: "ThirdController"
    })

    .otherwise({redirectTo: "/"})
});


app.controller("FirstController",function($scope, $http){
    $http.get("https://aaron2247201.github.io/WSD-Lab8/employee.json")
    .success(function(response)
    {
        $scope.employee=response.records;
    })
});

app.controller("SecondController",function($scope){
    $scope.message="This is a Admin Section";
});

app.controller("ThirdController",function($scope, $http){
    $http.get("https://aaron2247201.github.io/WSD-Lab8/employee.json")
    .success(function(response)
    {
        $scope.employee=response.records;
    })
});