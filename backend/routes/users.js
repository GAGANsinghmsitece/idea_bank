var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool',function(req,res,next){
  res.send('You are so cool');
});

module.exports = router;

//database_user
//t99f7KrJH7AdG7Ub
//mongodb+srv://database_user:t99f7KrJH7AdG7Ub@cluster0.mfvgh.mongodb.net/idea_bank?retryWrites=true&w=majority