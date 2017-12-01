import http from 'http';
import express from 'express';




const app = express();
app.server = http.createServer(app);


app.get('/',(req,res)=> res.send("Initial Application"));

app.server.listen(process.env.PORT || 3000);
console.log(`Started on port ${app.server.address().port}`);

export default app;