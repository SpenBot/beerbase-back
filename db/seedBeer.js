
//// DEPENDENCIES, MODULES, CONFIGURATIONS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const BeerModel = require("../models/BeerModel.js");
const seedBeerData = require("./seedsBeer.json");


//// CLEAR COLLECTION + INSERT SEED JSON //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

BeerModel.remove({})
  .catch(err => console.log(`\n\tError - removing Beer collection failed: ${err}\n`))
  .then(() => {
    return BeerModel.collection.insert(seedBeerData)
  })
  .then(() => {
    process.exit();
  })
