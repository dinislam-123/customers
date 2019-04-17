
module.exports = function (app) {

// var index = require('./index')

var controller = require('../controller/controller.js');

app.get('/', controller.testlist);

app.get('/customers/look', controller.look);

app.post('/test', controller.display);

app.get('/customers', controller.testlist);

app.get('/customers/add', controller.add);
app.post('/customers/add', controller.save);
app.get('/customers/delete/:id', controller.delete_customer); //edit customer route , get n post
app.get('/customers/edit/:id', controller.edit);
app.post('/customers/edit/:id', controller.save_edit);

app.get('/useralert/:id,:fname', controller.useralert);

}
