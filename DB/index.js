// connect to multiple mongo databases and use their connection
// through out the application by connecting once
const Mongo = require('mongodb').MongoClient

// db 1
const url = 'mongodb://localhost:27017/olaf'

// db 2
// const url2 = 'mongodb://localhost:27017/olaf'

// generic connector function which will establish connection to all dbs
function connect (url) {
  return Mongo.connect(url, { useUnifiedTopology: true }).then(client => client.db())
}

module.exports = async function () {
  // connecting to all databases
  const database = await Promise.all(
    [
      // connecitng db 1
      connect(url)

      // connecting to db 2
      // connect(url2)
    ])

  // exporting all db connecton
  return {
    // connection 1
    production: database[0]

    // connecition 2
    // testdb: database[0]

  }
}
