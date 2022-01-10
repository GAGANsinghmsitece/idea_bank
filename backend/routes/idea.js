var express=require('express');
var router=express.Router();

var IdeaController=require('../controllers/ideaController');

router.get('/',IdeaController.ideas_list);

router.get('/create',function(req,res){
	res.send('Create idea');
});

router.get('/completed',function(req,res){
	res.send('getting completed idea');
});

router.get('/deleted',function(req,res){
	res.send('getting deleted idea');
});

module.exports=router;