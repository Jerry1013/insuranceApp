angular.module("investmentApp.controllers")
.controller("registerCtrl" , ["$scope" ,"$ionicPopup","$translate","$state","smsService" ,"md5","API" ,"userService" , 
                              function($scope ,$ionicPopup ,$translate ,$state ,smsService ,md5 ,API ,userService){
	
	$scope.user = {
		password : "",
		inviteCode : "",
		verifyCode : "",
		userName : ""
	};
	
	$scope.isChecked = {checked : true};
	
	$scope.getVerfiyCode = function(){
		if($scope.user.userName){
			var sign = md5.createHash("lang="+$translate.use()+"&mobile="+$scope.user.userName+API.tokenCode);
			smsService.sendRegSmsCode({mobile : $scope.user.userName , sign :  sign , lang : $translate.use()}).$promise.then(function(data){
				if(data.code!=200){
					var alertPopup = $ionicPopup.alert({
					     title: $translate.instant('common.regTitle'),
					     template: data.msg
					   });
				}  
			});
		}
	};
		
	$scope.register = function(form){
		if(form.$valid){
			var signStr ="code="+$scope.user.verifyCode+ "&mobile="+$scope.user.userName+
			"&password="+md5.createHash($scope.user.password)+API.tokenCode;
			console.log(signStr);
			var sign = md5.createHash(signStr);
			userService.register({mobile :$scope.user.userName , code : $scope.user.verifyCode ,
				password : md5.createHash($scope.user.password) ,sign :sign }).$promise.then(function(data){
					
						if(data.code!=200){
							 var alertPopup = $ionicPopup.alert({
							     title: $translate.instant('common.regTitle'),
							     template: data.msg
							   });
						}else{
							 var alertPopup = $ionicPopup.alert({
							     title: $translate.instant('common.regTitle'),
							     template: "注册成功"
							   });
							 
							 alertPopup.then(function(res) {
									$state.go("login");
								});
						}
				});
			  
			
				
		}
	};
}]);