angular.module("investmentApp.controllers")
.controller("searchRepCtrl" , ["$scope" ,"convertGuideService" ,"md5","API" ,"$translate" ,
                               function($scope , convertGuideService ,md5,API ,$translate){
		
		$scope.pageObj = {
				currentPage : 0,
				maxPage : 1
		};
		
		$scope.guides = [];
		
		$scope.doRefresh = function(){
			var sign = md5.createHash("lang="+$translate.use()+"&page=1&size=10"+API.tokenCode);
			convertGuideService.getConvertGuides({page : 1 , size : 10 ,sign : sign ,lang :$translate.use() }).$promise.then(function(data){
				$scope.pageObj = data.obj;
				$scope.guides = $scope.pageObj.record;
				$scope.$broadcast('scroll.refreshComplete');
			});
		};
		
		$scope.loadMore = function(){
			var currentPage = $scope.pageObj.currentPage||0;
			var nextPage = currentPage+1;
			if($scope.pageObj.currentPage != $scope.pageObj.maxPage){
				var sign = md5.createHash("lang="+$translate.use()+"&page="+nextPage+"&size=10"+API.tokenCode);
				convertGuideService.getConvertGuides({page : nextPage , size : 10 ,sign : sign,lang :$translate.use() }).$promise.then(function(data){
					$scope.pageObj = data.obj;
					$scope.guides = $scope.guides.concat($scope.pageObj.record);
				});
			}

			$scope.$broadcast('scroll.infiniteScrollComplete');
		};
		
		
}]);