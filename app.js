
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

// var favicon = require('static-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');

// var conn = require('./config/connection');
// var connection  = require('express-myconnection');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

        // host: 'localhost',
        // user: 'root',
        // password : 'root',
        // port : 3306,
        // database:'mydata'
//     },'request')
// );


var server = app.listen(4302, function ()
{
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
require('./routes/route.js')(app);
