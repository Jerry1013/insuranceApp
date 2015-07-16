angular.module("investmentApp.controllers")
.controller("fundDetailCtrl" , ["$scope","fundDetailService","$ionicActionSheet",
                          function($scope ,fundDetailService ,$ionicActionSheet){
		
		$scope.getFundDetail = function(){
			fundDetailService.getFundDetail().$promise.then(function(data){
				$scope.fundDetail = data;
			});
		};
		
		$scope.showSharing =function(){
			cordova.exec(function (data) {
				alert(data);
		    }, function (data) {
		    	alert(data);
		    }, "PdfViewer", "openPDF", ['http://120.24.222.176:8083/corstest/data/AXA-20150701-2.pdf']);
		};
		
		$scope.shareToWx = function(timeLine){
        	cordova.exec(function(data){
        		cordova.exec(function(data){},
        				function(data){
        			
        		},"WeiXin" ,"send" ,[{
			            type: 'text',
			            text: '德盈华叶微信分享测试',
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