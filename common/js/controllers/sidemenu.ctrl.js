angular.module("investmentApp.controllers")
.controller("sidemenuCtrl" , ["$scope" ,"$translate"  ,"$ionicSideMenuDelegate","$state",
                              function($scope ,$translate ,$ionicSideMenuDelegate , $state){
	
	$scope.changeLanguage = function (key) {
	    $translate.use(key);
	    $ionicSideMenuDelegate.toggleLeft();
	};
	
	$scope.login = function(){
		$ionicSideMenuDelegate.toggleLeft();
		$state.go("login");
	};
	
	
	
	$scope.exitApp = function(){
		ionic.Platform.exitApp();
	};
}]);