const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const MONGO_URI =
  'mongodb+srv://bnlee419:brian0419@cluster0.tqcvw05.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'SquareUp',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  fightingStyle: {
    type: String,
    required: true,
  },
  totalWins: {
    type: Number,
    required: true,
  },
  totalLosses: {
    type: Number,
    required: true,
  },
});

const Profiles = mongoose.model('profile', profileSchema);

module.exports = {
  Profiles,
};
