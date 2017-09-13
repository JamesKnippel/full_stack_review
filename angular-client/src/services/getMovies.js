angular.module('blockbuster')
.service('movieService', function($http) {
  this.getMovies = function() {
    return $http.get('api/movies')
      .then((result) => {
        return result
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  this.addMovie = function(data) {
    $http.post('api/movies', data)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  this.deleteMovie = function(title) {
    $http.delete('api/movies/' + title)
      .then((result) => {
        console.log('deleted entry')
      })
      .catch((err)=> {
        console.log(err);
      })
  }
})
