var app = angular.module("MyApp", []);
app.controller("HomeCtrl", ['$scope', function($scope) {

}]);

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);