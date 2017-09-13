const Sequelize = require('sequelize')
const db = require('../config.js')

const Movie = db.define('movies', {
  title: Sequelize.STRING,
  numberOfCopies: Sequelize.INTEGER,
  IMDBrating: Sequelize.INTEGER
});

Movie.sync()
.then(()=>{console.log('succesfull table addition')})
.catch(()=>{console.log('failed to add table to db')})

module.exports = Movie;