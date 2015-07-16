angular.module("investmentApp.services")
.factory("lifeInsService" , ["$resource" , function($resource){
	var service;
    service = $resource("dummy/life.insurance.json" ,{},{
    	getLifeInsuranceTypes : {
    		method : 'GET' , params : {} , isArray : true
    	}
    });
    
    return service;
}]);