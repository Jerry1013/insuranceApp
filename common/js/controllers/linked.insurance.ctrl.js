angular.module("investmentApp.controllers")
.controller("linkedInsCtrl" , ["$scope","linkedInsService" ,"advertService","md5","API",
                               "$ionicSideMenuDelegate","$translate" ,"$ionicSlideBoxDelegate" ,"$timeout",
                               function($scope ,linkedInsService ,advertService ,
                            		   md5,API ,$ionicSideMenuDelegate ,$translate ,$ionicSlideBoxDelegate ,$timeout){
	$ionicSideMenuDelegate.toggleLeft();   
	$scope.insuranceTypes = [];
	
	$scope.advertImgs = [];
	
	$scope.loadMore = function(){
		linkedInsService.getInsuranceTypes().$promise.then(function(data){
			$scope.insuranceTypes = data;
		});
	};
	  
	$scope.getAdvertImgs = function(){
		var sign = md5.createHash("lang="+$translate.use()+"&size=5"+API.tokenCode);
		advertService.getAdvertImgs({size : 5 , sign : sign ,lang : $translate.use()}).$promise.then(function(data){
			if(data.code==200){
				$scope.advertImgs = data.obj;
				$timeout(function(){
					$ionicSlideBoxDelegate.$getByHandle('image-viewer').update();
					
				},1000);
			}
		});
	};
}]);