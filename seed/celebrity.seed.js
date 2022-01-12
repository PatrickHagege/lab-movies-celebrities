// create a test data set of valid users
require("dotenv").config();
require("./../db/index"); // fetch the db connection
const Celebrity = require("./../models/Celebrity.model"); // fetch the model to validate our user document before insertion (in database)

const celebrities = [
  {
    name: "sonic youth",
    description: "a noisy band",
    description: "a noisy band"
    },
  {
    name: "wu tang clan",
    occupation: "a legendary hip hop crew",
    catchPhrase: "a noisy band"
    },
  {
    name: "aphex twin",
    occupation: "a major electro artist",
    catchPhrase: "a noisy band"
    }
];

(async function insertArtists() {
  try {
    await Celebrity.deleteMany(); // empty the styles db collection
    const inserted = await Celebrity.insertMany(celebrities); // insert docs in db
    console.log(`seed artists done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
})();