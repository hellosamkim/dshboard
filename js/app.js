var app = angular.module("Dashboard", []);

app.controller('MainController', function($scope, $http) {
  $http.get('/main.json').success(function(data) {
    $scope.seed = data;
  }); 
});






