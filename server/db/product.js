const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    address:{
        type:String
    },
    conatct:{
        type:String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", productSchema);
