const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
  console.log('Mongo DB connection ready!');
});

mongoose.connection.on('error', (e) => {
  console.error(e);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
