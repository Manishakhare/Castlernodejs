




const express = require('express');

const mongoose = require('mongoose');
// const express = require('express');

var bodyParser = require('body-parser')
const connectDB = require('./config/db');
var cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use((req,res, next)=>{

 
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Headers',"*");
    res.header('Access-Control-Allow-Credentials', true);
    next();
 });
// Connect Database
connectDB();




app.get('/', (req, res) => res.send('Hello world!'));

app.use('/admin', require('./router/Index'));
app.use('/admin', require('./router/Sendroutes'));
// cors


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));