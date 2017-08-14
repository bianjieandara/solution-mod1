(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
$scope.dishes= "";
$scope.message= "";
$scope.check= function (event) {
var array=$scope.dishes.split(',');
var i = 0;
array.forEach( function(valor, indice) { 
    if(valor!=""&&valor!=" "){
    i++;	
    }
});
if(i<4){
$scope.message= "Enjoy!";
}
else{
$scope.message= "Too much!";	
}
}
}



})();


