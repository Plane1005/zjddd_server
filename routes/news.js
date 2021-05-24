var express = require('express');
var multer = require('multer');
var axios = require('axios');
var fs = require('fs');
var path = require('path');
var router = express.Router();


router.get('/getNews' ,(req, res) => {
    let news = fs.readFileSync(`./data/news.json`,'utf-8')
    res.status(200).json({ code: 200, news: JSON.parse(news).news })
})


module.exports = router