const router = require('express').Router()
const movieController = require('../controllers/movie.controller')

router.route('/movies')
  .get(movieController.getAllMovies)
  .post(movieController.addMovie)

// **other files will need access to information in here**
module.exports = router