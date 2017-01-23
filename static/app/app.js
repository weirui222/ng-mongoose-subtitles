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
      url: '/watch/:id',
      templateUrl: '/app/containers/watch/watch.html'
    })
    .state('editState', {
      url: '/edit/:id',
      templateUrl: '/app/containers/watch/watch.html'
    })
    .state('creditState', {
      url: '/credit',
      component: 'creditComp'
    });

    //Removes # symbol for our routes
    $locationProvider.html5Mode(true);

  }
]);
