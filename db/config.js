//TODO: set up your database configuration and connection here
var url = 'postgres://avcnfjyl:7MPpFNzE6lYjyZrRBOZ0eFiCm2ReLaBF@pellefant.db.elephantsql.com:5432/avcnfjyl'
const Sequelize = require('sequelize')
// ** remember to hide your db config information!

const db = new Sequelize (url, { dialect: 'postgres' });

db.authenticate()
.then(()=>console.log('successful database connection'))
.catch(()=>console.log('failed database connection'))

// **other files will need access to information in here**
module.exports = db;