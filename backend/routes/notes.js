var express=require('express');
var router=express.Router();

router.get('/create',function(req,res){
	res.send('Create a note');
});

router.get('/:ideaId',function(req,res){
	//req.params.ideaId
	res.send('Return list of notes');
});

module.exports=router;