import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Promise from 'bluebird';
import auth from './routes/auth';
import users from './routes/users';

dotenv.config();
const app = express();
app.server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL,{ useMongoClient: true});

//CORS - 3RD party middleware
app.use(cors());

app.use(bodyParser.json({extended: false}));
mongoose.Promise=Promise;

app.use("/api/auth",auth);
app.use("/api/users",users);

app.use(express.static('dist'));
app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, '../dist', 'index.html'));
 });

app.server.listen(process.env.PORT || 3000);
console.log(`Started on port ${app.server.address().port}`);

export default app;