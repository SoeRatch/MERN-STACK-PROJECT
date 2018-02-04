import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	articlestring:String,
	title:String,
	userId : {type: mongoose.Schema.Types.ObjectId, required: true },
	votes: {type: Number, default: 0},
	voters: [{type: String}]
});


schema.methods.vote=function vote(vot,currentid){
	if(vot == 'up'){
		this.voters.push(currentid);
		this.voters =[...new Set(this.voters)];
		this.votes =this.voters.length;
	} else {
		this.votes -= 1;
	}

};


export default mongoose.model("Article",schema);