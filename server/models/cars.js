/* File Name: cars.js
    Name: Husna Bakhshi
Student#: 301194192
Date: 28 Oct 2022
*/

let mongoose = require("mongoose");

// create a model class
let Car = mongoose.Schema(
  {
    Carname: String,
    Category: String,
    Carmodel: String,
    Price: Number,
  },
  {
    collection: "cars",
  }
);

module.exports = mongoose.model("Car", Car);
