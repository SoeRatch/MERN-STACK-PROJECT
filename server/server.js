import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';


const app = express();
app.server = http.createServer(app);

//CORS - 3RD party middleware
app.use(cors());

app.use(bodyParser.json({extended: false}));
app.use(express.static('dist'));

app.post("/api/auth",(req,res)=>{
	res.status(400).json({errors:{
		global:"Invalid credentials"
	}});
});

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, '../dist', 'index.html'));
 });

app.server.listen(process.env.PORT || 3000);
console.log(`Started on port ${app.server.address().port}`);

export default app;