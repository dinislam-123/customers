
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
// var customers = require('./routes/customers');
var index = require('./routes/index')
var bodyParser = require('body-parser');


// var favicon = require('static-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');

var app = express();

var connection  = require('express-myconnection');
var mysql = require('mysql');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.use(
    connection(mysql,{
        host: 'localhost',
        user: 'root',
        password : 'root',
        port : 3306,
        database:'mydata'
    },'request')
);


// app.get('/', routes.list);

app.get('/', index.testlist);

app.get('/customers/look', index.look);

app.post('/test', index.display);

// app.get('/customers', customers.testlist);

app.get('/customers/add', index.add);
app.post('/customers/add', index.save);
app.get('/customers/delete/:id', index.delete_customer); //edit customer route , get n post
app.get('/customers/edit/:id', index.edit);
app.post('/customers/edit/:id', index.save_edit);


var server = app.listen(4302, function ()
{
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});

module.exports = app;
