angular.module('App', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider
  ) {
    $urlRouterProvider.otherwise('/');

    //Setup states (routes)
    $stateProvider
    .state('homeState', {
      url: '/',
      component: 'homeComp'
    })
    .state('watchState', {
      url: '/watch',
      component: 'watchComp'
    })
    .state('editState', {
      url: '/edit',
      component: 'editComp'
    })

    //Removes # symbol for our routes
    $locationProvider.html5Mode(true);

  }
]);
