const mongoose = require("mongoose");

const staff = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    type: String,
  },
  action: {
    type: String,
  },
});
module.exports = mongoose.model("staffs", staff);
