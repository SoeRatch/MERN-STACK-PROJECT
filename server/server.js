import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';



const app = express();
app.server = http.createServer(app);

//CORS - 3RD party middleware
app.use(cors());

app.use(bodyParser.json({extended: false}));
app.use(express.static('dist'));

app.get('/',(req,res)=> res.send("Initial Application"));

app.server.listen(process.env.PORT || 3000);
console.log(`Started on port ${app.server.address().port}`);

export default app;