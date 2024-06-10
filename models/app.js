const mongoose = require('mongoose');
const Group = require('./models/Group');

const mongoDB = 'mongodb://localhost:23513/GroupSchema';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
