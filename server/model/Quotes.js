const mongoose = require("mongoose");

// Schema and Model
const quoteSchema = new mongoose.Schema({
  number_Id: {
    type: Number,
  },
  quote: String,
  author: String,
});

module.exports = mongoose.model("Quotes", quoteSchema);
