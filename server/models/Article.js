import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	articlestring:String,
	title:String,
	type:String,
	userId : {type: mongoose.Schema.Types.ObjectId, required: true }
});

export default mongoose.model("Article",schema);