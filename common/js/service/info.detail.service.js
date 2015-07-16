angular.module("investmentApp.services")
.factory("infoDetailService" ,["$resource" ,function($resource){
		var service ;
		service = $resource("dummy/info.detail.json" ,{} ,{
			getInfoDetail : {
				method : "GET" , params : {}, isArray : false
			}
		});
		
		return service;
}]);