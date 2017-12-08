import express from 'express';
import User from '../models/User';

const router = express.Router();

router.post("/",(req,res)=>{
	const token = req.body.token;

	User.findOneAndUpdate({confirmationToken:token},
			{confirmationToken:"", confirmed: true},
			{new: true}
			).then(user=>
				user? res.json({user:user.toAuthJSON() })
					: res.status(400).json({})
				);

});

export default router;