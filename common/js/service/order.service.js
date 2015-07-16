angular.module("investmentApp.services")
.factory("ordersService" , ["$resource" , function($resource){
	var service;
    service = $resource("dummy/orders.json" ,{},{
    	getOrders : {
    		method : 'GET' , params : {} , isArray : true
    	}
    });
    
    return service;
}]);