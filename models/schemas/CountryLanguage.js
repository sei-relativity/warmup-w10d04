const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countryLanguagesSchema = new Schema({
    language: String,
    isofficial: Boolean,
    countryCode: String,
    percentage: Number
}, { timestamps: true });

const CountryLanguages = mongoose.model('CountryLanguages', countryLanguagesSchema)

module.exports = CountryLanguages;