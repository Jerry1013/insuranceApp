angular.module("investmentApp.services")
.factory("userService" , ["$resource" ,"API" , function($resource ,API){
	var service;
    service = $resource(API.userUrl+"/:action" ,{},{
    	register : {
    		method : 'GET' , params : {action : "register"}
    	},
    	login : {
    		method : 'GET' , params : {action : "login"}
    	}
    });
    
    return service;
}]);