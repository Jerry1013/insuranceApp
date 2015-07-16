angular.module("investmentApp.controllers")
.controller("invitesCtrl" , ["$scope","invitesService",function($scope ,invitesService){

	    $scope.invites = [];
	    
		$scope.doRefresh = function(){
			invitesService.getInvites().$promise.then(function(data){
				$scope.invites = data;
				$scope.$broadcast('scroll.refreshComplete');
			});
		};
		
	   $scope.getInvites = function(){
		   invitesService.getInvites().$promise.then(function(data){
			   $scope.invites = $scope.invites.concat(data);
				$scope.$broadcast('scroll.infiniteScrollComplete');
		   });
	   };
		
		
}]);