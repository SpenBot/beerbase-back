
//// MODULES, CONFIGURATION ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const mongoose = require('mongoose')

mongoose.Promise = Promise



//// CONNECT TO ENVIRONMENT DATABASE ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

if (process.env.NODE_ENV == "production") {

  mongoose.connect(process.env.MLAB_URL)
    .then(connection => {
      console.log(`\n\tConnection established to PRODUCTION database.`)
      // console.log(`\n\tConnection established to PRODUCTION DB : '${process.env.MLAB_URL}'\n`)
    })
    .catch(err => console.log(`\n\tConnection failed : ${err}`))

} else {

  const mongoUri = 'mongodb://localhost/craftbeer-hypercard-db'

  mongoose.connect(mongoUri)
    .then(connection => {
      console.log(`\n\tConnection established to LOCAL database : '${mongoUri}'\n`)
    })
    .catch(err => console.log(`\n\tConnection failed : ${err}`))

}




//// EXPORT MODULES ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

module.exports = mongoose







//// END //////////////////////////////////////////////////////////////////////
