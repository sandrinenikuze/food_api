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
      $scope.addFood = function(ingredient, measurement, spice){
        var food ={
          ingredient: ingredient,
          measurement: measurement,
          spice: spice
        };
        $http.post("/api/v1/foods.json",food).then(function(response){
          $scope.foods.push(response.data);
        });
      }
      $scope.deleteFood = function(food, index){
        $http.delete("/api/v1/foods/" + food.id + ".json").then(function(response){
          $scope.foods.splice(index, 1);
        });
      } 
      $scope.updateFood = function(food){
        $http.patch("/api/v1/foods/" + food.id + ".json").then(function(response){
          var index = $scope.people.indexOf(person);
          $scope.people[index] = response.data;
        });
      }
      $scope.toggleOrder = function(attribute){
        $scope.orderAttribute = attribute;
        if (attribute ===$scope.orderAttribute){
          $scope.descending = !$scope.descending
        } else{
          $scope.orderAttribute = attribute;
        }
      }
    window.$scope = $scope;
  });
})();
    
