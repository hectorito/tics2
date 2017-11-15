angular.module( 'sample.newsend', [
  'ui.router',
  'sample.home',
  'angular-storage'
])
.config(function($stateProvider) {
  $stateProvider.state('newsend', {
    url: '/newsend',
    controller: 'NewsendCtrl',
    templateUrl: 'newsend/newsend.html'
  });
})

.controller( 'NewsendCtrl', function NewSendController( $scope, $http, store, jwtHelper) {

  $scope.jwt = store.get('jwt');
  $scope.decodedJwt = $scope.jwt && jwtHelper.decodeToken($scope.jwt);
  $scope.checkboxModel = {
       value1 : true,
       value2 : 'YES'
     };
  $scope.opensend = function() {
    // ver si comparte valores entre carpetas
    callApi('anonymous', 'http://localhost:3001/api/random-quote');
  }

  $scope.closesend = function() {
    callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
  }

  function callApi(type, url) {
    $scope.response = null;
    $scope.api = type;
    $http({
      url: url,
      
      method: 'GET'
    }).then(function(quote) {
      $scope.response = quote.data;
    }, function(error) {
      $scope.response = error.data;
    });
  }

});



<select ng-model="selection" ng-options="item for item in items">
  </select>
  <code>selection={{selection}}</code>
  <hr/>







