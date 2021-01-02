
const mongoose = require("mongoose");
const BillSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  bill: {
    type: Number,
  },
  particular: {
    type: String,
  },
  pan: {
    type: Number,
  },
  item: {
    type: String,
  },
  vatable: {
    type: Number,
  },
  taxable: {
    type: Number,
  },
  total: {
    type: Number,
  },
});

const Bill = mongoose.model("Bill", BillSchema);
module.exports = Bill;
