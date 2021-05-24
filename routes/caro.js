var express = require('express');
var multer = require('multer');
var fs = require('fs');
var path = require('path');

const router = express.Router();

router.get('/getAllCarousel' ,(req, res) => {
    let carl = fs.readFileSync(`./data/carl.json`,'utf-8')
    res.status(200).json({ code: 200, carl: JSON.parse(carl).carl })
})

router.get('/editCarousel' ,(req, res) => {
    let carl = fs.readFileSync(`./data/carl.json`,'utf-8')
    res.status(200).json({ code: 200, carl: JSON.parse(carl).carl })
})

router.get('/deleteCarousel' ,(req, res) => {
    let carl = fs.readFileSync(`./data/carl.json`,'utf-8')
    res.status(200).json({ code: 200, carl: JSON.parse(carl).carl })
})

router.get('/addCarousel' ,(req, res) => {
    let carl = fs.readFileSync(`./data/carl.json`,'utf-8')
    res.status(200).json({ code: 200, carl: JSON.parse(carl).carl })
})

module.exports = router