var Notes=require('../models/notes');

exports.notes_list=function(req,res){
	res.send('sending notes for idea '+req.params.ideaId);
};
