const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
});

const SALT_WORK_FACTOR = 5;

profileSchema.pre('save', async function (next) {
  try {
    if (this.isModified('password')) {
      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(this.password, SALT_WORK_FACTOR);

      // Set the hashed password as the user's password
      this.password = hashedPassword;
      console.log('PASSWORD', this.password);
    }
    next();
  } catch (error) {
    next(error);
  }
});

const Profiles = mongoose.model('profile', profileSchema);

module.exports = Profiles;
