const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./database/database");
const quoteRoutes = require("./routes/quote");

//Use .env file in config folder
require("dotenv").config();

app.use(cors());

//Connect To Database
connectDB();

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setup Routes For Which The Server Is Listening
app.use("/api/quotes", quoteRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log(
    "Server is running, you better catch it on port:" + process.env.PORT
  );
});
