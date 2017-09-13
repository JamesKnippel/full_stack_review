angular.module('blockbuster')
  .controller('addMovieFormController', function (movieService) {
    this.submitEntry = (data) => {
      this.movie = {
        title: 'x',
        numberOfCopies: 'x',
        IMDBrating: 'x'
    };
      movieService.addMovie(data)
    }

  })
  .component('addMovieForm', {
    bindings: {
      func: '<'
    },

    controller: 'addMovieFormController',
    templateUrl: 'src/templates/addMovieForm.html'
  })
