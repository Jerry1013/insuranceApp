angular.module("investmentApp.controllers")
.controller("infoDetailCtrl" , ["$scope","infoService" ,"$stateParams" ,"md5" , "API"  ,"$translate" ,"$localstorage",
                          function($scope ,infoService ,$stateParams ,md5 , API  ,$translate ,$localstorage){
	   
	    $scope.user = $localstorage.get("user");	
	
		$scope.infoDetail = function(){
			var sign = md5.createHash("id="+$stateParams.id+"&lang="+$translate.use()+"&userId="+$scope.user.id+API.tokenCode);
			infoService.getMessageDetail({
				 sign : sign,
				 userId : $scope.user.id,
				 id : $stateParams.id,
				 lang : $translate.use()
			}).$promise.then(function(data){
				$scope.infoDetail = data.obj;
			});
		};
}]);