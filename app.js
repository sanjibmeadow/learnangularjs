var app = angular.module("myShoppingList", ["ngAnimate","ngRoute"]);
app.controller("myCtrl",["$scope", function($scope){


	$scope.products = ["Milk", "Bread", "Chees", "Butter", "Cold-drinks", "Biskuts"];
	$scope.addItem = function(){
			$scope.errortext = "";
			if(!$scope.addMe){
				$scope.errortext = "Please Enter product name";
				return;
			}else if( !($scope.products.indexOf($scope.addMe) == -1)) {
				$scope.errortext = "Please Enter another product name it's already in list";
				$scope.addMe = "";
				return;
			}else{
			$scope.products.push($scope.addMe);
			$scope.addMe = "";
		}
	}
	$scope.removeItem = function(x){
		$scope.products.splice(x,1);
	}
	$scope.textEdit = "Edit" ;
	$scope.editSave = function(){
		if ($scope.textEdit == "Save" ) {$scope.textEdit = "Edit"; return; }
		$scope.textEdit = "Save" ;
	}
}]);

app.config(function($routeProvider,$locationProvider) {
	
	 
    $routeProvider.
    when("/contact.html", {
        templateUrl : "partial/contact.html"
    }).
    when("/aboutus", {
        templateUrl : "aboutus.html"
    }).
    when("/service", {
        templateUrl : "service.html"
    }).
    otherwise({
      redrictTo: "index.html"
    })
	
	 $locationProvider.html5Mode({enabled: true, requireBase: true});
	
	
});

