// angular.module('blockbusterApp', ['blockbusterApp.services', 'blockbusterApp.controllers'])

angular.module('blockbuster')
  .controller('AppController', function(movieService) {
    this.appTitle = 'blockbuster';


    this.$onInit = () => {
      movieService.getMovies();
    };
  })
  .component('app', {
    controller: 'AppController',
    templateUrl: 'src/templates/app.html'
  })