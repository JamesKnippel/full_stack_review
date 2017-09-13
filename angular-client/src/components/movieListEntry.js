angular.module('blockbuster')
  .controller('movieListEntryController', function(movieService){
    this.deleteEntry = () => {
      this.title = this.movie.title
      movieService.deleteMovie(this.title); 
      let el = angular.element(document.querySelector('.movie-entry'));
      el.remove();
    }
  })
  .component('movieListEntry',  {
    bindings: {
      movie: '<'
    },
    templateUrl: 'src/templates/movieListEntry.html',
    controller: 'movieListEntryController'
  })
  