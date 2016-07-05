// node dependencies //
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

// setting application as an 'Express' application //
var app = express();

// returns middleware that only parses 'json' formatted data //
app.use(bodyParser.json());

// setting local port for heroku local //
app.set('port', (process.env.PORT || 5000));

// connecting the server to the frontend filepath '/' //
app.use(express.static(__dirname + '/'));

// setting up the header for a server response //
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.set('views', __dirname + '/main.html');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.status(200).end();
});

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/contacts", function(req, res) {
});

app.post("/contacts", function(req, res) {
});

/*  "/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get("/contacts/:id", function(req, res) {
});

app.put("/contacts/:id", function(req, res) {
});

app.delete("/contacts/:id", function(req, res) {
});


// retrieve data from the api URL //
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

app.listen(app.get('port'), function() {
  console.log('Running on Port :', app.get('port'));
});