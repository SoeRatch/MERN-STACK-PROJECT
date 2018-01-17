import express from 'express';
import authenticate from '../middlewares/authenticate';
import Article from '../models/Article';
import parseErrors from '../utils/parseErrors';

const router = express.Router();

router.use(authenticate);

router.get('/title',(req,res)=>{
	Article.find({}, {title:1, _id:0})
		.then(titles=>res.json({titles}));
});

router.get('/article',(req,res)=>{
	const pam=req.query.paramt;
	Article.findOne({ title: pam})
		.then(article=>res.json({article}));
});

router.post('/',(req,res)=>{
	Article.create({ ...req.body.article, userId: req.currentUser._id })
		.then(article => res.json({ article }))
		.catch(err => res.status(400).json(
			{ errors: parseErrors(err.errors) }
			)
		);
});




export default router;

