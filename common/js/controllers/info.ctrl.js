angular.module("investmentApp.controllers")
.controller("infoCtrl" , ["$scope" ,"infoService" ,"md5" , "API"  ,"$translate" ,"$localstorage" ,
                          function($scope , infoService , md5 , API  ,$translate ,$localstorage){
		
		$scope.infos = [];
		
		$scope.user = $localstorage.get("user");
		
		$scope.pageObj = {
				currentPage : 0,
				maxPage : 1
		};
		
		$scope.doRefresh = function(){
			var sign = md5.createHash("lang="+$translate.use()+"&page="+nextPage+"&size=10&userId="+$scope.user.id+API.tokenCode);
			infoService.getMessages({
				lang : $translate.use(),
		    	page : nextPage ,
		    	size : 10,
		    	userId : $scope.user.id ,
		    	sign : sign
			}).$promise.then(function(data){
				$scope.pageObj = data.obj;
				$scope.infos = $scope.pageObj.record;
				$scope.$broadcast('scroll.refreshComplete');
			});
		};
		
		$scope.loadMore = function(){
			var currentPage = $scope.pageObj.currentPage||0;
			var nextPage = currentPage+1;
			if($scope.pageObj.currentPage != $scope.pageObj.maxPage){
				var sign = md5.createHash("lang="+$translate.use()+"&page="+nextPage+"&size=10&userId="+$scope.user.id+API.tokenCode);
			    infoService.getMessages({
			    	lang : $translate.use(),
			    	page : nextPage ,
			    	size : 10,
			    	userId : $scope.user.id ,
			    	sign : sign
			    }).$promise.then(function(data){
			    	$scope.pageObj = data.obj;
					$scope.infos = $scope.infos.concat($scope.pageObj.record);
					$scope.$broadcast('scroll.infiniteScrollComplete');
			    });
			}
		};
		
		
}]);