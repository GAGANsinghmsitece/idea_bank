var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var NotesSchema=new Schema({
	title:{
		type:String,
		required:true,
		maxLength:100,
	},
	description:{
		type:String,
		required:true,
		maxLength:500,
	},
	idea:{
		type:Schema.Types.ObjectId,
		ref:'Idea',
		required:true,
	},
	created_date:{
		type:Date,
		required:true,
		default:Date.now
	}
});

module.exports=mongoose.model('Notes',NotesSchema);