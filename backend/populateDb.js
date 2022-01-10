#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Ideas = require('./models/idea');
var Notes = require('./models/notes');


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var ideas=[];
var notes=[];
 
function authorCreate(title, short_description, description,cb) {
  authordetail = {title:title,
    short_description:short_description,
    description:description,
  };
  
  var author= new Ideas(authordetail);
       
  author.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Author: ' + author);
    ideas.push(author);
    cb(null, author)
  }  );
}

function notesCreate(title,description, description,cb) {
  authordetail = {title:title,
    short_description:short_description,
    description:description,
  };
  
  var author= new Ideas(authordetail);
       
  author.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Author: ' + author);
    ideas.push(author);
    cb(null, author)
  }  );
}

function createGenreAuthors(cb) {
    async.series([
        function(callback) {
          authorCreate('Patrick', 'Rothfuss', '1973-06-06', callback);
        },
        function(callback) {
          authorCreate('Ben', 'Bova', '1932-11-8', callback);
        },
        function(callback) {
          authorCreate('Isaac', 'Asimov', '1920-01-02', callback);
        },
        function(callback) {
          authorCreate('Bob', 'Billings', 'qaqa aaa aaa aa', callback);
        },
        function(callback) {
          authorCreate('Jim', 'Jones', '1971-12-16', 'aa aa a a a', callback);
        },
        ],
        // optional callback
        cb);
}




async.series([
    createGenreAuthors,
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});




