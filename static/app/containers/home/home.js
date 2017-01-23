angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl(ScriptService) {
    //static test data


    var homeComp = this;
    homeComp.titles = [];
    //this is where you would get the things from the db
    //TODO: require the services in the function and below
    //Service.getSubtitles().then();

    // homeComp.titles = [
    //   {
    //     "_id":'1',
    //     "title": "Original"
    //   },
    //   {
    //     "_id":'2',
    //     "title": "WDI 11"
    //   },
    //   {
    //     "_id":'3',
    //     "title": "Blue"
    //   },
    //   {
    //     "_id":'4',
    //     "title": "Red"
    //   },
    //   {
    //     "_id":'5',
    //     "title": "Grey"
    //   },
    //
    // ];

    homeComp.titles = ScriptService.getTitles();

}

HomeCompCtrl.$inject = ['ScriptService'];
