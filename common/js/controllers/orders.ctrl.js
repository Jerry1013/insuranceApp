angular.module("investmentApp.controllers")
.controller("ordersCtrl" , ["$scope","ordersService",function($scope ,ordersService){
			
	   $scope.getOrders = function(){
		   ordersService.getOrders().$promise.then(function(data){
			   $scope.orders = data;
		   });
	   };
		
		
}]);