// angular.module('blockbusterApp', ['blockbusterApp.services', 'blockbusterApp.controllers'])

angular.module('blockbuster')
  .controller('AppController', function (movieService) {
    this.appTitle = 'Blockbustahhh';
    this.displayForm = false;
   
    this.renderMovies = () => {
      movieService.getMovies()
        .then((returnedData) => {
          this.movies = returnedData.data
          this.fetchedMovies = true;
        })
    };
    this.displayAddMovieForm = () => {
      this.displayForm = true;
      this.fetchedMovies = false;
    };


  })
  .component('app', {
    controller: 'AppController',
    templateUrl: 'src/templates/app.html'
  })