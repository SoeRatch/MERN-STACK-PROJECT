import express from 'express';
import authenticate from '../middlewares/authenticate';
import Article from '../models/Article';
import parseErrors from '../utils/parseErrors';

const router = express.Router();

router.get('/article',(req,res)=>{
	const pam=req.query.paramt;
	Article.findOne({ title: pam})
		.then(article=>res.json({article}));
});

router.get('/alltitle',(req,res)=>{
	Article.find({}, {title:1, _id:0})
		.then(titles=>res.json({titles}));
});

router.use(authenticate);

router.get('/title',(req,res)=>{
	Article.find({userId: req.currentUser._id}, {title:1, _id:0})
		.then(titles=>res.json({titles}));
});



router.post('/',(req,res)=>{
	Article.create({ ...req.body.article, userId: req.currentUser._id })
		.then(article => res.json({ article }))
		.catch(err => res.status(400).json(
			{ errors: parseErrors(err.errors) }
			)
		);
});


router.get('/article/vote',(req,res)=>{
	const pam=req.query.id;
	const vot=req.query.vote;
	const currentid=req.currentUser._id;
	Article.findOne({ _id: pam})
		.then(article=>{
			article.vote(vot,currentid);
			article.save();
			const voteres = article.votes;
			res.json({voteres});
		});
});


export default router;

