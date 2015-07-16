angular.module("investmentApp.services")
.factory("infoService" ,["$resource" ,"API" , function($resource ,API){
	var service;
	    service = $resource(API.messageUrl+"/:action" ,{},{
	    	getMessages : {
	    		method : 'GET' , params : {action : "query"} 
	    	},
	    	getMessageDetail : {
	    		method : 'GET' , params : {action : "detail"} 
	    	}
	    });
	    
	    return service;
}]);