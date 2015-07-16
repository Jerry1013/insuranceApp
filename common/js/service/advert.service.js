angular.module("investmentApp.services")
.factory("advertService" , ["$resource" ,"API" , function($resource ,API){
	var service;
    service = $resource(API.advertImgUrl ,{},{
    	getAdvertImgs : {
    		method : 'GET' , params : {}
    	}
    });
    
    return service;
}]);