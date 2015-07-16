angular.module("investmentApp.controllers")
.controller("settingCtrl" , ["$scope" ,"$localstorage" ,"$state" ,"$rootScope" , 
                             function($scope , $localstorage ,$state ,$rootScope){
	   $scope.userInfo = {};
	   $scope.getUserInfo = function(){
		   $scope.userInfo =   $localstorage.get("userInfo");
	   };
	   $scope.user = $localstorage.get("user");
	     
}]);