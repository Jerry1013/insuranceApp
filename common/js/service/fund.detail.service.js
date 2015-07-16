angular.module("investmentApp.services")
.factory("fundDetailService",["$resource" ,function($resource){
		var service;
			service = $resource("dummy/fund.detail.json" , {} ,{
				getFundDetail : {
					method : "GET" , params : {}
				}
			});
			
			return service;
}]);