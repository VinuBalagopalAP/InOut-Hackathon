const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');
require('dotenv').config();

// // Cors 
// const corsOptions = {
//   origin: process.env.ALLOWED_CLIENTS.split(',')
//   // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
// }

// Default configuration looks like
// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }

// app.use(cors(corsOptions))
app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();
app.use(bodyParser.json());
// app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>
{
  res.send('we are legion')

});
// Routes 
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, console.log(`Listening on port ${PORT}.`));