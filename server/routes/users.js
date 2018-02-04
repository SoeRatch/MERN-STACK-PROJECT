import express from 'express';
import User from '../models/User';
import parseErrors from '../utils/parseErrors';
import {sendConfirmationEmail} from '../mailer';
import authenticate from '../middlewares/authenticate';

const router = express.Router();

router.post('/',(req,res)=>{
	const {email, password, username} = req.body.user;
	const user = new User({ email});
	user.setPassword(password);
	user.username = username;
	user.setConfirmationToken();
	user.save()
	.then(userRecord=>{
		sendConfirmationEmail(userRecord);
		res.json({user: userRecord.toAuthJSON()});

	}).catch(err=>res.status(400).json({
		errors:parseErrors(err.errors)
		})
	);
});

router.use(authenticate);

router.get('/user_details',(req,res)=>{
	const userdat={};
	User.findOne({_id: req.currentUser._id})
		.then(user=>{
			userdat.name=user.name;
			userdat.address=user.address;
			userdat.description=user.description;
			res.json(userdat);

		});
});


router.post('/save_name',(req,res)=>{
	const userdat={};
	const name = req.body.name;
	User.findOne({_id: req.currentUser._id})
		.then(user=>{
			user.name=name;
			user.save();
			userdat.name=user.name;
			userdat.address=user.address;
			userdat.description=user.description;
			res.json(userdat);
		});
});

router.post('/save_address',(req,res)=>{
	const userdat={};
	const address = req.body.address;
	User.findOne({_id: req.currentUser._id})
		.then(user=>{
			user.address=address;
			user.save();
			userdat.name=user.name;
			userdat.address=user.address;
			userdat.description=user.description;
			res.json(userdat);
		});
});

router.post('/save_description',(req,res)=>{
	const userdat={};
	const description = req.body.description;
	User.findOne({_id: req.currentUser._id})
		.then(user=>{
			user.description=description;
			user.save();
			userdat.name=user.name;
			userdat.address=user.address;
			userdat.description=user.description;
			res.json(userdat);
		});
});






export default router;