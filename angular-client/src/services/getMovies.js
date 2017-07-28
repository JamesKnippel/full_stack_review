angular.module('blockbuster')
.service('movieService', function($http) {
  this.getMovies = function() {
    return $http.get('api/movies')
      .then((result) => {
        console.log('result is' ,result);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  this.addMovie = function(data) {
    //post
  }

})
