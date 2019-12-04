const mongoose = require('mongoose')
const City = require('./schemas/City');
const Country = require('./schemas/Country');
const Language = require('./schemas/CountryLanguage');

const citySeeds = require('./seeders/citySeeds')
const countrySeeds = require('./seeders/countrySeeds')
const languageSeeds = require('./seeders/countryLanguagesSeeds')

const db = mongoose.connection;
const mongoURI = 'mongodb://localhost:27017/carmen';

mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
    console.log('the connection with mongod is established')
})

///////////// Delete Methods ///////////

// City.deleteMany({}, function (err) {
//     console.log('city collection removed')
// });

// Country.deleteMany({}, function (err) {
//     console.log('country collection removed')
// });

// Language.deleteMany({}, function (err) {
//     console.log('language collection removed')
// });


/////////////// Insert Methods /////////////


// City.insertMany(citySeeds, (error, city) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(city);
//     } db.close()
// });

// Country.insertMany(countrySeeds, (error, country) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(country);
//     } db.close()
// });

// Language.insertMany(languageSeeds, (error, language) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(language);
//     } db.close()
// });

module.exports = {
    City, Language, Country
}