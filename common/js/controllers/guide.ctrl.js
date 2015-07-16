angular.module("investmentApp.controllers")
.controller("guideCtrl" , ["$scope" ,"$localstorage" ,"$state",
                           function($scope ,$localstorage ,$state){
	
	
		$scope.gotoLogin = function(){
			$localstorage.set("initiated" ,true);
			$state.go("menus.tabs.linkedIns");
		};
	
}]);