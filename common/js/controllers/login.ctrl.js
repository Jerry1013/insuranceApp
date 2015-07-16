angular.module("investmentApp.controllers")
.controller("loginCtrl" , ["$scope" ,"$state" ,"$localstorage" ,"$rootScope" ,"userService","md5","API","$ionicPopup","$translate",
                           function($scope ,$state , $localstorage ,$rootScope , userService , md5 , API ,$ionicPopup ,$translate){
	
	    $scope.userInfo = {
	    	 userName : "",
	    	 password : ""
	    };
	    $scope.getUserInfo = function(){
	    	var userInfo = $localstorage.get("userInfo");
	    	$localstorage.remove("userInfo");
	    	if(userInfo){
	    		$scope.userInfo = userInfo;
	    	}
	    };
		
		$scope.gotoRegister = function(){
			$state.go("register");
		};
		
		$scope.login = function(form){
			 if(form.$valid){
				 var sign = md5.createHash("lang="+$translate.use()+"&mobile="+$scope.userInfo.userName+"&password="+md5.createHash($scope.userInfo.password)+API.tokenCode);
		
				 userService.login({mobile :$scope.userInfo.userName , 
					 password : md5.createHash($scope.userInfo.password) , sign : sign ,lang : $translate.use() }).$promise.then(function(data){
						 if(data.code!=200){
							 var alertPopup = $ionicPopup.alert({
							     title: $translate.instant('common.loginTitle'),
							     template: data.msg
							   });
						 }else{
							 $localstorage.set("userInfo" ,$scope.userInfo);
							 $localstorage.set("user" ,data.obj);
							 if($rootScope.currentState){
								 $state.go($rootScope.currentState);
								 $rootScope.currentState = "";
							 }else{
								 $state.go("menus.tabs.linkedIns");
							 }
						 }
					 });
			 }
		};
	
}]);