//TODO: fill this page in!
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const db = require('../db/config')
const movieRouter = require('./router/blockbuster.router')
// require your dependencies

const port = 1337;
const ip = 'localhost'

// create an instance of your express server
const app = express();
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:true}))
  .use(morgan('dev'))
  .use('/api', movieRouter)
app.use(express.static('angular-client'))




app.listen(port, ip, () => {
  console.log("you've connected to the server")
})

