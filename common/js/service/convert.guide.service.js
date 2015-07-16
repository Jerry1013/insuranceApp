angular.module("investmentApp.services")
.factory("convertGuideService" , ["$resource" ,"API" , function($resource ,API){
	var service;
    service = $resource(API.reportSearchUrl ,{},{
    	getConvertGuides : {
    		method : 'GET' , params : {}
    	}
    });
    
    return service;
}]);