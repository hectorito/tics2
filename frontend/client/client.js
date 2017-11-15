angular.module( 'sample.client', [
  'ui.router',
  'angular-storage'
])
.config(function($stateProvider) {
  $stateProvider.state('client', {
    url: '/client',
    controller: 'ClientCtrl',
    templateUrl: 'client/client.html'
  });
})
.controller( 'ClientCtrl', function ClientController( $scope, $http, store, $state) {
  $scope.jwt = store.get('jwt');
  $scope.decodedJwt = $scope.jwt && jwtHelper.decodeToken($scope.jwt);
  $scope.client = function(){
    callApi('Client', 'http://localhost:3001/api/client')
  };


  



// De aqui para bajo se necesita del backend



});