const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// ithula namma table name Add pannanum ahm pa
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
