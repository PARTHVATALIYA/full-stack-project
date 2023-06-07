const mongoose = require('mongoose');
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect('mongodb://65.0.168.1:27017/db_test', { useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false  });
// Validation
mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));
