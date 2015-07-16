angular.module("investmentApp.controllers")
.controller("lifeInsShoreMoreCtrl" , ["$scope","lifeInsService" ,
                               function($scope ,lifeInsService){
	$scope.doRefresh = function(){
		lifeInsService.getLifeInsuranceTypes().$promise.then(function(data){
			$scope.insuranceTypes = data;
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
	
	$scope.loadMore = function(){
		lifeInsService.getLifeInsuranceTypes().$promise.then(function(data){
			$scope.insuranceTypes = data;
		});
	};
}]);