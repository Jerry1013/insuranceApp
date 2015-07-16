angular.module("investmentApp.controllers")
.controller("appointmentsCtrl" , ["$scope","appointmentsService",function($scope ,appointmentsService){
			
	   $scope.getAppointments = function(){
		   appointmentsService.getAppointments().$promise.then(function(data){
			   $scope.appointments = data;
		   });
	   };
		
		
}]);