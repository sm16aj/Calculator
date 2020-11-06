const mongoose = require("mongoose");

const calculationSchema = mongoose.Schema;

let calculation = new calculationSchema ({
   calculation: String,
})

module.exports = mongoose.model("Calculation", calculation);