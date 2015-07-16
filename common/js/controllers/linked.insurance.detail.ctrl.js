angular.module("investmentApp.controllers")
.controller("linkedInsDetailCtrl" , ["$scope","linkedInsService" ,"$stateParams", "md5" , "API"  ,"$translate",
                               function($scope ,linkedInsService ,$stateParams ,md5 , API  ,$translate){
		$scope.choice = 'A';
		
		$scope.detail = {};
		
		$scope.getDetail = function(){
			var sign = md5.createHash("id="+$stateParams.id+"&lang="+$translate.use()+API.tokenCode);
			linkedInsService.getInsDetail({
				id : $stateParams.id ,
				lang : $translate.use(),
				sign : sign
			}).$promise.then(function(data){
				$scope.detail = data.obj;
			});
		};
		
}]);