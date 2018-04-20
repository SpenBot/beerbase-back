
//// DEPENDENCIES, MODULES, CONFIGURATIONS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const UserModel = require("../models/UserModel.js");
const seedUserData = require("./seedsUser.json");


//// CLEAR COLLECTION + INSERT SEED JSON //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

UserModel.remove({})
  .catch(err => console.log(`\n\tError - removing User collection failed: ${err}\n`))
  .then(() => {
    return UserModel.collection.insert(seedUserData)
  })
  .then(() => {
    process.exit();
  })
