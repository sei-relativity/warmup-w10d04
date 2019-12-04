const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    code: String,
    name: String,
    region: String,
    continent: {
        type: String,
        enum: ["Asia",
            "Europe",
            "North America",
            "Africa",
            "Oceania",
            "Antarctica",
            "South America"],
    },
    surfacearea: Number,
    indepyear: Number,
    population: Number,
    lifeexpectancy: Number,
    gnp: Number,
    gnpold: Number,
    localname: String,
    governmentform: String,
    headofstate: String,
    code2: String,
    capital: Number,
}, { timestamps: true });

const Country = mongoose.model('Country', countrySchema)

module.exports = Country;