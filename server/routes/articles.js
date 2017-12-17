import express from 'express';
import authenticate from '../middlewares/authenticate';
import Article from '../models/Article';
import parseErrors from '../utils/parseErrors';

const router = express.Router();

router.use(authenticate);

router.post('/',(req,res)=>{
	Article.create({ ...req.body.article, userId: req.currentUser._id })
		.then(article => res.json({ article }))
		.catch(err => res.status(400).json(
			{ errors: parseErrors(err.errors) }
			)
		);
});




export default router;