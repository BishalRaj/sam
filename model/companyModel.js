const mongoose = require("mongoose");
const CompanySchema = new mongoose.Schema({
  particular: {
    type: String,
  },  pan: {
    type: Number,
  }
});

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
