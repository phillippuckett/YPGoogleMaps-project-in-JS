var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', function (req, res) {
    res.status(200).end();
});

app.post('/apiCall', function (req, res) {
    console.log(req);

    request.get({ url: 'http://api2.yp.com/listings/v1/reviews?listingid=13519&format=json&key=hn2v15wbkv' }, function (error, response, body) {

        if (error) {
            res.send("API error");
            return;
        }
        console.log(response);
        res.send(response);
    })
});

app.listen(8080);