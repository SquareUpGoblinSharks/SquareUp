const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const SALT_WORK_FACTOR = 10;

const MONGO_URI = process.env.DB_URI;

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "SquareUp",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  sex: {
    type: String,
    required: false,
  },
  height: {
    type: Number,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  fightingStyle: {
    type: String,
    required: false,
  },
  wins: [{ type: String }],
  loss: [{ type: String }],
  totalWins: {
    type: Number,
    default: 0,
  },
  totalLosses: {
    type: Number,
    default: 0,
  },
  location: String,
});

profileSchema.pre("save", function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  });
});

const Profiles = mongoose.model("profile", profileSchema);

module.exports = Profiles;
