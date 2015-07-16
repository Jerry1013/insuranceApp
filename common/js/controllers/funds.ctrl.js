angular.module("investmentApp.controllers")
.controller("fundsCtrl" , ["$scope" ,"fundService" ,"$ionicActionSheet" ,
                          function($scope ,fundService ,$ionicActionSheet){
		$scope.funds = [];
		
		$scope.doRefresh = function(){
			fundService.getFunds().$promise.then(function(data){
				$scope.funds = data;
				$scope.$broadcast('scroll.refreshComplete');
			});
		};
		
		$scope.loadMore = function(){
			fundService.getFunds().$promise.then(function(data){
				$scope.funds = $scope.funds.concat(data);
				$scope.$broadcast('scroll.infiniteScrollComplete');
			});
		};
		
		
}]);