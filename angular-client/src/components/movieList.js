angular.module('blockbuster')
  .component('movieList', {
    imhere: function(){
      console.log("i'm inside this fufu bullshit")
    },
    bindings: {
      movies: '<'
    },
    templateUrl: 'src/templates/movieList.html',
  })
  

  