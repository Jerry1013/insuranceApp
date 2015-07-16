angular.module("investmentApp")
.config(["$ionicConfigProvider" , "$translateProvider" ,
         function($ionicConfigProvider ,$translateProvider){
		
		$ionicConfigProvider.tabs.position('bottom'); //other values: top
		$ionicConfigProvider.form.checkbox('circle');
		
		$translateProvider.translations('zh_CN', translations_zh);
        $translateProvider.translations('zh_HK', translations_hk);
        $translateProvider.preferredLanguage('zh_HK');
}])
.run(["$ionicPlatform","$ionicPopup" ,"$translate" , "$rootScope" ,"$localstorage" ,"$state"
      ,function($ionicPlatform, $ionicPopup ,$translate ,$rootScope ,$localstorage ,$state){
	$ionicPlatform.onHardwareBackButton(function () {
	          $ionicPopup.confirm({
	            title: $translate.instant('common.exitApp'),
	            template: $translate.instant('common.exitConfirm')
	          }).then(function(res){
	            if( res ){
	              navigator.app.exitApp();
	            }
	          });
	  });
	
	 $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
		 	if(toState.name === 'menus.tabs.setting'){
			 var userInfo =   $localstorage.get("userInfo");
                    if(!userInfo){
                        event.preventDefault();
                        $rootScope.currentState = toState.name;
                    	$state.go("login");
                    }
                
                 }
	 		});
	
	
}]);