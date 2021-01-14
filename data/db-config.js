const knex = require('knex'); // library used to make sql queries using javascript

const config = require('../knexfile.js'); // different configs for different envs

// in HEROKU, NODE_ENV  // "production"
// in local, NODE_ENV // undefined
// so we use a logical expression to get the environment
const env = process.env.NODE_ENV || 'development' //which environment to use depends on if this is production or not//

console.log('the env is', env)

module.exports = knex(config.development); // choose env and call knex with the right config
//this code will work for both envs