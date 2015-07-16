angular.module("investmentApp.utils")
.factory("$localstorage" , ["$window" ,function($window){
	var storageLocalMethods = {};
	
	storageLocalMethods.set = function(name , value){
		$window.localStorage.setItem(name , angular.toJson(value));
	};
	
	storageLocalMethods.get = function(name){
		return angular.fromJson($window.localStorage.getItem(name));
	};
	
	storageLocalMethods.remove = function(name){
		$window.localStorage.removeItem(name);
	};
	
	return storageLocalMethods;
	
}]);