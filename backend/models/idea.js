var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var IdeaSchema=new Schema({
	title:{
		type:String,
		required:true,
		maxLength:100,
	},
	short_description:{
		type:String,
		required:true,
		maxLength:200,
	},
	description:{
		type:String,
		required:true,
		maxLength:1000,
	},
	current_state:{
		type:String,
		required:true,
		enum:['State1','State2','State3','State4','State5','State6'],
		default:'State1',
	},
	created_date:{
		type:Date,
		required:true,
		default:Date.now
	}
});

IdeaSchema.virtual('url').get(function(){
	return '/idea/'+this._id;
});

module.exports=mongoose.model('Idea',IdeaSchema);