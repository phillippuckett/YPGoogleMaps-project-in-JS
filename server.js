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
    var location = req.body.location;
    var searchTerm = req.body.searchTerm;
    console.log(searchTerm, location);

    request.get({
        url: 'http://api2.yp.com/listings/v1/search?searchloc=' + location + '&term=' + searchTerm + '&radius=10&listingcount=50&format=JSON&key=7569ckbfxh',
        headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36" }
    }, function (error, response, body) {

        if (error) {
            res.send("API error");
            return;
        }
        console.log(response);
        res.send(response);
    })
});

app.listen(8080);