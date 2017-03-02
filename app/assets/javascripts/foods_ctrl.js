(function() {
    "use strict";
    angular.module("app").controller("foodsCtrl", function($scope, $http){
      $scope.setup = function(){
        $http.get("/api/v1/foods.json").then(function(response){
          $scope.foods = response.data;
        });
      }
      $scope.toggleSpice = function(food){
        food.spice = !food.spice;
      }
      $scope.addFood = function(ingredient, measurment, spice){
        var food ={
          ingredient:ingredient
          measurement:measurement
          spice:spice
        };
        $http.post("/api/v1/foods.json", food).then(function(response){
          $scope.foods.push(response.data);
        });
      }
    window.$scope = $scope;
  });
})();
    
