
/* ----- Application Init file ----- */

const mongoose = require('mongoose');
const serverBackend = require('./backend/utils/server');
const dbInit = require('./backend/utils/dbInitializer');

const app = {};

const checkDbConnection = (callback) => {
  if (mongoose.connection.readyState !== 1) {
    setTimeout(() => {
      checkDbConnection(() => {
        callback();
      });
    }, 200);
  } else if (mongoose.connection.readyState === 1) {
    // Check if db is empty once connection to the database is established
    callback();
  }
};

app.init = () => {
  // Start backend server
  serverBackend.init();
  // Check if db connection is established
  checkDbConnection(() => {
    mongoose.connection.db.collection('users').countDocuments(function(err, count) {
      dbInit.addCreditWorker();
      // If db is empty, initialize it
      if( count == 0) {
        dbInit.initializeDb();
      }
    });
  });
};

// For explicitly start running project using: node ./index.js
if (require.main === module) {
  app.init();
}

// In case of adding test runner etc.
module.exports = app;
