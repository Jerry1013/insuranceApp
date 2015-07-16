angular.module("investmentApp.services")
.factory("linkedInsDetailService" , ["$resource" , function($resource){
	var service;
    service = $resource("dummy/1.json" ,{},{
    	getInsuranceDetail : {
    		method : 'GET' ,params : {} , isArray : false
    	}
    });
    
    return service;
}]);