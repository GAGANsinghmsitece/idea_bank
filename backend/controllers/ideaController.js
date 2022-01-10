var Idea=require('../models/idea');

exports.ideas_list=function(req,res,next){
	Idea.find({},'title short_description').sort({title:0}).exec(function(err,ideas_list){
		if(err)
			return next(err);
		res.json(ideas_list);
	});
};

exports.create_idea=function(req,res){
	res.send('NI: create ideas POST');
};

exports.completed_ideas_list=function(res,send){
	res.send('NI: completed ideas list');
};

exports.deleted_ideas_list=function(res,send){
	res.send('NI: deleted ideas list');
};