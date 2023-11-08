const Profiles = require('../models/models');
const mongoose = require('mongoose');

createTestUsers = async (i) => {
  const data = await Profiles.create({
    name: `name_${i}`,
    username: `username_${i}`,
    password: `password_${i}`,
    profilePicture: 'none',
    sex: i % 2 === 0 ? 'M' : 'F',
    height: 60,
    weight: 150 + i * 10,
    age: 20 + i,
    fightingStyle: i % 2 === 0 ? 'SouthPaw' : 'Orthodox',
  })
}

for (let i = 0; i < 10; i++) {
  createTestUsers(i);
}
