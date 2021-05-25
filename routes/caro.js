var express = require('express');
var fs = require('fs');
var path = require('path');
const bodyParser = require('body-parser')
const app = express()
const router = express.Router();
var Busboy = require('busboy');
var inspect = require('util').inspect;
var os = require('os')
var http = require('http')


router.get('/getAllCarousel' ,(req, res) => {
    let carl = fs.readFileSync(`./data/carl.json`,'utf-8')
    res.status(200).json({ code: 200, carl: JSON.parse(carl).carl })
})

router.post('/editCarousel' ,(req, res) => {
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      var saveTo = path.join(__dirname,'../img/carousel',path.basename(fieldname));
      console.log(saveTo);
      file.pipe(fs.createWriteStream(saveTo));
    });
    busboy.on('finish', function() {
      res.writeHead(200, { 'Connection': 'close' });
      res.end("That's all folks!");
    });
    req.pipe(busboy);
    // console.log(res);
    // let carl = fs.readFileSync(`./data/carl.json`,'utf-8')
    // res.status(200).json({ code: 200, carl: JSON.parse(carl).carl })
})

router.get('/deleteCarousel' ,(req, res) => {
    let carl = fs.readFileSync(`./data/carl.json`,'utf-8')
    res.status(200).json({ code: 200, carl: JSON.parse(carl).carl })
})

router.post('/addCarousel' ,(req, res) => {
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      var saveTo = path.join(__dirname,'../img/carousel',path.basename(fieldname));
      console.log(saveTo);
      file.pipe(fs.createWriteStream(saveTo));
    });
    busboy.on('finish', function() {
      res.writeHead(200, { 'Connection': 'close' });
      res.end("That's all folks!");
    });
    req.pipe(busboy);
    let carl = fs.readFileSync(`./data/carl.json`,'utf-8')
    var add = {
        "img": "img/carousel/07.jpg"
    }
    carl = JSON.parse(carl)
    var item = add.toString();//将二进制的数据转换为字符串
    item = JSON.stringify(item);//将字符串转换为json对象
    carl.carl.push(add);//将传来的对象push进数组对象中
    var str = JSON.stringify(carl)
    fs.writeFile('./data/carl.json',str,function(err){
        if(err){
            console.error(err);
        }
        console.log('----------新增成功-------------');
    })
})

module.exports = router