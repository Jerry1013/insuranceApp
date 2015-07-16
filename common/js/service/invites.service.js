angular.module("investmentApp.services")
.factory("invitesService" , ["$resource" , function($resource){
	var service;
    service = $resource("dummy/invites.json" ,{},{
    	getInvites : {
    		method : 'GET' , params : {} , isArray : true
    	}
    });
    
    return service;
}]);