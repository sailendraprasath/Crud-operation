const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//ithu module panna aprm
const UserModel = require("./models/user");

const app = express();
app.use(cors());
app.use(express.json());

//Ithula link add panna aprm namma DB name add pannanum
// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/crud");

//ipo API get pandra method ahm pa 2
// Get all users
app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
// specific ID update panna ahm pa 3
// Get user by ID
app.get("/getuser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
// Ipo app dot put panna porom ahm pa 4
// Update user by ID
app.put("/UpdateUsers/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    id, // No need for an object here
    { name: req.body.name, email: req.body.email, age: req.body.age }
    // { new: true } // This returns the updated document
  )
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => res.status(500).json(err));
});
// ipo delete ahm pa
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});
// ipo API call create pandrom ahm pa 1
// Create a new user
app.post("/CreateUsers", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
