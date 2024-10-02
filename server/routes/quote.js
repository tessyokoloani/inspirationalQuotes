const express = require("express");
const router = express.Router();
const Quotes = require("../model/Quotes");

//get all quotes
router.get("/", async (req, res) => {
  try {
    const quotes = await Quotes.find();
    res.status(200).json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get single quote
router.get("/quote", async (req, res) => {
  try {
    const quotes = await Quotes.find();
    let randomNumber = Math.round(Math.random() * (quotes.length - 1));
    if (randomNumber === 0) {
      console.log(`random number is 0`);
      randomNumber = 1;
    }
    const quote = await Quotes.findOne({ number_Id: randomNumber });
    console.log(randomNumber, quote);
    res.status(200).json({ quote: quote.quote, author: quote.author });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Enter quote into database
router.post("/", async (req, res) => {
  try {
    const numberOfQuotes = (await Quotes.find()).length;
    const quote = new Quotes({
      number_Id: numberOfQuotes,
      author: req.body.author,
      quote: req.body.quote,
    });
    const newQuote = await quote.save();
    res
      .status(201)
      .json({ newQuote: newQuote, message: "New quote added successfuly" });
  } catch (err) {
    res.status(400).json({
      message:
        "New quote not added to database due to the following: " + err.message,
    });
  }
});

module.exports = router;
