angular.module("investmentApp.controllers")
.controller("lifeInsCtrl" , ["$scope" ,"lifeInsService" ,
                               function($scope ,lifeInsService){
		$scope.insuranceTypes = [];
		
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