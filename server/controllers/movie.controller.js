const movieModel = require('../../db/models/movieModel')

module.exports = {
  getAllMovies: (req, res) => {
    movieModel.findAll({})
    .then( (movieList) => {
      res.status(200).send(movieList)
    })
    .catch( () => {
      res.status(404)
    })
  },
  addMovie: (req, res) => {
    movieModel.create({
      title: req.body.title,
      numberOfCopies: req.body.numberOfCopies,
      IMDBrating: req.body.IMDBrating
    })
    .then( (movie) => {
      res.status(201).send(movie)
    })
    .catch( () => {
      res.status(404)
    })
  }
}

