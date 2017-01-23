angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl(ScriptService) {
    var homeComp = this;
    homeComp.scripts = [];
    homeComp.scripts = ScriptService.getTitles();
}

HomeCompCtrl.$inject = ['ScriptService'];
