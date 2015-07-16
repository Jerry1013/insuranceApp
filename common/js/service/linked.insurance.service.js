angular.module("investmentApp.services")
.factory("linkedInsService" , ["$resource" ,"API" , function($resource ,API){
	var service;
    service = $resource(API.linkedInsUrl+"/:action" ,{},{
    	getInsDetail : {
    		method : 'GET' , params : {action : "detail"}
    	}
    });
    
    return service;
}]);