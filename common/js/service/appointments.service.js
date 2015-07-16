angular.module("investmentApp.services")
.factory("appointmentsService" , ["$resource" , function($resource){
	var service;
    service = $resource("dummy/appointments.json" ,{},{
    	getAppointments : {
    		method : 'GET' , params : {} , isArray : true
    	}
    });
    
    return service;
}]);