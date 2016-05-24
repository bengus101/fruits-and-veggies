var app = angular.module("MyApp", []);
app.controller("HomeCtrl", ['$scope', function($scope) {
	$scope.fruit = [];
	$scope.fruits = [
		"Apple",
		"Apricot",
		"Banana"
	];

	$scope.veggies = [];
	$scope.vegetables = [
		"Artichoke",
		"Arugula",
		"Asparagus"
	];

	$scope.shiftRight = function(i) {
		console.log("clicked right");
		$scope.fruit.push(this.item);
		$scope.fruits.splice(i, 1);
	};

	$scope.shiftLeft = function(i) {
		console.log("clicked left");
		$scope.veggies.push(this.item);
		$scope.vegetables.splice(i, 1);
	};

}]);

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);