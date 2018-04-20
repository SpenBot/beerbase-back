
//// DEPENDENCIES, MODULES, CONFIGURATIONS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const mongoose = require("../db/connection.js")




//// DEFINE SCHEMA ////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const BeerSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: String,
  photo: String,
  ratings: [
    {
      userName: String,
      score: Number
    }
  ],
  reviews: [
    {
      userName: String,
      body: String
    }
  ]
});




//// DEFINE MODEL ////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const BeerModel = mongoose.model("Beer", BeerSchema)






//// EXPORT MODULES ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

module.exports = BeerModel







//// END //////////////////////////////////////////////////////////////////////