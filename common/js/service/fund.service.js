angular.module("investmentApp.services")
.factory("fundService" , ["$resource" , function($resource){
	var service;
    service = $resource("dummy/funds.json" ,{},{
    	getFunds : {
    		method : 'GET' , params : {} , isArray : true
    	}
    });
    
    return service;
}]);