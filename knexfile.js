module.exports = {
  // for my machine
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/posts.db3', // sqlite3 specific
    },
    useNullAsDefault: true, // sqlite3 specific
    migrations: { // files where we evolve the databse step by step over time
      directory: './data/migrations',
    },
    seeds: { // mock data to populate or dev db
      directory: './data/seeds',
    },
  },

  // for heroku (maybe postgres instead of sqlite)
  production: {
    client: 'sqlite3',
    connection: {
      filename: './data/posts.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
  }, 
};
