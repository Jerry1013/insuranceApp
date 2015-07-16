angular.module("investmentApp.utils" ,[]);
angular.module("investmentApp.directives" ,[]);
angular.module("investmentApp.services" ,[]);
angular.module("investmentApp.controllers" ,[]);
angular.module("investmentApp" ,["ionic",
                                "ngResource",
                                "angular-md5",
                                "ngSanitize",
                                "pascalprecht.translate",
                                "investmentApp.utils",
                                "investmentApp.directives",
                                "investmentApp.services",
                                "investmentApp.controllers"
                                ]);