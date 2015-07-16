angular.module("investmentApp.controllers")
.controller("incentivePlanCtrl" , ["$scope","$ionicActionSheet",
                          function($scope ,$ionicActionSheet){
		
		$scope.showSharing =function(){
			 $ionicActionSheet.show({
			      titleText: '邀请好友赚钱',
			      buttons: [
			        { text: '<i class="icon ion-share"></i> 邀请微信朋友' },
			        { text: '<i class="icon ion-share"></i> 分享到微信朋友圈' },
			      ],
			      cancelText: '取消',
			      cancel: function() {
			        console.log('CANCELLED');
			      },
			      buttonClicked: function(index) {
			        if(index==0){
			        	$scope.shareToWx(false);
			        }else{
			        	$scope.shareToWx(true);
			        }
			        return true;
			      }
			    });
		};
		
		$scope.shareToWx = function(timeLine){
        	cordova.exec(function(data){
        		cordova.exec(function(data){
        		},
        				function(data){
        		},"WeiXin" ,"send" ,[{
			            type: "webpage",
			            url : "http://120.24.222.176:8083/webos/appdownload.html",
			            title: "德盈华叶微信移动端App下载",
			            desc : "德盈华叶微信移动端App下载",
			            imgUrl : "",
			            isSendToTimeline: timeLine 
			        }]);
        	}, function(data){
        		WL.SimpleDialog.show(
        				"Response from plug-in", data, 
        				[{text: "注册微信失败", handler: function() {WL.Logger.debug("Ok button pressed");}
        				}]
        			);
        	}, "WeiXin", "register", ["wx483ae66868fb5f56"]);
		};
		
}]);