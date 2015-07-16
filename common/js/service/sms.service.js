angular.module("investmentApp.services")
.factory("smsService" , ["$resource" , "API" , function($resource ,API){
	var service;
    service = $resource(API.smsUrl + "/:action" ,{},{
    	sendRegSmsCode : {
    		method : 'GET' , params : {"action" : "sendRegSmsCode"}
    	},
    	verifyRegSmsCode : {
    		method : 'GET' , params : {"action" : "verifyRegSmsCode"}
    	}
    });
    
    return service;
}]);