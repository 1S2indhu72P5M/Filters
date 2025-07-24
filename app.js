(function (){
'use Strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope, $filter) {
  $scope.name = "Sindhu";
  $scope.stateOfBeing="angre";
  $scope.cookieCost = .45;
  $scope.sayMessage = function () {
    var msg = "Sindhu likes to eat healthy snacks at night!";
    var output = $filter('uppercase')(msg);
    return output;
  };

$scope.feedSindhu = function () {
  $scope.stateOfBeing = "feed";
};
}
})();
