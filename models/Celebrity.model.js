//  Add your code here
const { model, Schema } = require('mongoose')

const celebritySchema = new Schema ({
    name: {type: String, unique : true},
    occupation: String,
    catchPhrase: String,
})

const CelebrityModel  = model('celebrities', celebritySchema);// first arg => collection in db

module.exports = CelebrityModel;