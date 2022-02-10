//require('dotenv').config({path:'src/.env'});
const express= require('express');
const bodyParser = require('body-parser');
const app= express();
const port=5000;
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());
//console.log(process.env.ACCESS_TOKEN_SECRET_KEY);
app.get('/book',(req,res) => {
    res.json({'status':"success"});
})
app.post('/login',(req,res) => {
    console.log(req.body)
})
app.listen(port, () => {
    console.log(`server statings on port ${port}`)
})