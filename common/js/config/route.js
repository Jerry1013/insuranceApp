angular.module("investmentApp")
.config(["$stateProvider" ,"$urlRouterProvider" ,"$localstorageProvider" ,
         function($stateProvider ,$urlRouterProvider ,$localstorageProvider){
		
	  $stateProvider
	  .state("guide" ,{
		  url : "/guide",
		  templateUrl : "views/guide.html",
		  controller : "guideCtrl"
	  })
	  .state("login" ,{
		  url : "/login",
		  templateUrl : "views/login.html",
		  controller : "loginCtrl"
	  })
	  .state("register" ,{
		  url : "/register" ,
		  templateUrl : "views/register.html",
		  controller : "registerCtrl"
	  })
	  .state("readRegInstruction" ,{
		  url : "/readRegInstruction" ,
		  templateUrl : "views/reg.instruction.html",
		  controller : "regInstructionCtrl"
	  })
	  .state("forgetPassword" ,{
		  url : "/forgetPassword" ,
		  templateUrl : "views/forget.password.html",
		  controller : "forgetPasswordCtrl"
	  })
	  .state("menus" ,{
		  url : "/menus" ,
		  controller : "sidemenuCtrl",
		  templateUrl : "views/sidemenus.html"
	  })
	  .state("menus.tabs",{
		  url : "/tabs",
		  abstract : true,
		  views : {
			  "menu-content" : {
				  templateUrl : "views/tabs.html"
			  }
		  }
	  })
	  .state("menus.tabs.linkedIns" , {
		  url : "/linkedIns" , 
		  views : {
			  "linkedIns-tab" : {
				  templateUrl : "views/linked.insurance.html",
				  controller : "linkedInsCtrl"
			  }
		  }
	  })
	  .state("linkedInsDetail" , {
		  url : "/linkedInsDetail/:id" , 
		  templateUrl : "views/linked.insurance.detail.html",
		  controller : "linkedInsDetailCtrl"
	  })
	  .state("payLinkedIns" , {
		  url : "/payLinkedIns" , 
		  templateUrl : "views/linked.insurance.pay.html",
		  controller : "linkedInsPayCtrl"
	  })
	  .state("menus.tabs.lifeIns" ,{
		  url : "/lifeIns" ,
		  views : {
			  "lifeIns-tab" : {
				  templateUrl : "views/life.insurance.html",
				  controller : "lifeInsCtrl"
			  }
		  }
	  })
	  .state("menus.tabs.searchReports" ,{
		  url : "/searchReports" ,
		  views : {
			  "searchReports-tab" : {
				  templateUrl : "views/search.report.html",
				  controller : "searchRepCtrl"
			  }
		  }
	  })
	  .state("lifeInsDetail" ,{
		  url : "/lifeInsDetail" ,
		  templateUrl : "views/life.insurance.detail.html",
		  controller : "lifeInsDetailCtrl"
	  })
	  .state("orderLifeIns" ,{
		  url : "/orderLifeIns" ,
		  templateUrl : "views/life.insurance.order.html",
		  controller : "lifeInsOrderCtrl"
	  })
	  .state("lifeInsShowMore" ,{
		  url : "/lifeInsShowMore" ,
		  templateUrl : "views/life.insurance.more.html",
		  controller : "lifeInsShoreMoreCtrl"
	  })
	  .state("menus.tabs.incentivePlan" ,{
		  url : "/incentivePlan" ,
		  views : {
			  "incentivePlan-tab" : {
				  templateUrl : "views/incentivePlan.html",
				  controller : "incentivePlanCtrl"
			  }
		  }
	  })
	  .state("fundDetail" ,{
		  url : "/fundDetail" ,
		  templateUrl : "views/fund.detail.html",
		  controller : "fundDetailCtrl"
	  })
	  .state("buyFund" ,{
		  url : "/buyFund" ,
		  templateUrl : "views/buy.fund.html",
		  controller : "buyFundCtrl"
	  })
	  .state("menus.tabs.setting" ,{
		  url : "/setting" ,
		  views : {
			  "setting-tab" : {
				  templateUrl : "views/setting.html",
				  controller : "settingCtrl"
			  }
		  }
	  })
	  .state("myInfo" ,{
		  url : "/myInfo" ,
		  templateUrl : "views/info.html",
		  controller : "infoCtrl"
	  })
	  .state("infoDetail" ,{
		  url : "/infoDetail/:id" ,
		  templateUrl : "views/info.detail.html",
		  controller : "infoDetailCtrl"
	  })
	  .state("myOrders" ,{
		  url : "/myOrders" ,
		  templateUrl : "views/orders.html",
		  controller : "ordersCtrl"
	  })
	  .state("myAppments" ,{
		  url : "/myAppments" ,
		  templateUrl : "views/appointments.html",
		  controller : "appointmentsCtrl"
	  })
	  .state("myApplySettings" ,{
		  url : "/myApplySettings" ,
		  templateUrl : "views/app.settings.html",
		  controller : "appSettingsCtrl"
	  })
	  .state("myInvites" ,{
		  url : "/myInvites" ,
		  templateUrl : "views/invites.html",
		  controller : "invitesCtrl"
	  })
	  .state("mySearchRep" ,{
		  url : "/mySearchRep" ,
		  templateUrl : "views/search.report.html",
		  controller : "searchRepCtrl"
	  })
	  .state("mySearchRepDetail" ,{
		  url : "/mySearchRepDetail" ,
		  templateUrl : "views/search.report.detail.html",
		  controller : "searchRepDetailCtrl"
	  });
	  
	  var initiated = $localstorageProvider.$get().get("initiated");
	  
	  if(initiated){
	  	  $urlRouterProvider.otherwise("/menus/tabs/linkedIns");
	  }else{
		 $urlRouterProvider.otherwise("/guide");
	  }
	  
}]);