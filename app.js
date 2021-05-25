var fs = require('fs');
var https = require('https');
var path = require('path');
var cors = require('cors');
var axios = require('axios');
var logger = require('morgan');
// var dotenv = require('dotenv');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const app = express()
app.use(cors());
const router = express.Router();
const port = 2000

const API = 'http://localhost:2000/'

app.use(express.static(__dirname + '/'));
app.use('/img', express.static('img'));
app.use('/upload', express.static('upload'));


var caro = require('./routes/caro');
var news = require('./routes/news');


app.use('/api/caro', caro);
app.use('/api/news', news);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/updateCas',(req,res) => {
  res.send('ready to update')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})