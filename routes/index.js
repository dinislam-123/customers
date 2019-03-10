

// exports.list = function(req, res)
// {
//     // res.render('customers',{})
//     res.render('index', { title: "First Express Program..." });
// };



exports.add = function(req, res)
{
    res.render('add_customer',{page_title:"Add Customers Record Node.js"});
};

exports.testlist = function(req, res) {


    req.getConnection(function (err, connection) {


    var query = connection.query('SELECT * FROM mytable', function (err, rows) {

        if (err) {
            console.log("Error Selecting : %s ", err);
        }
        res.render('customers', {title: "Frist Express Customers - Node.js", data: rows});
    });
});
};

exports.save = function(req,res){
    debugger;
    // console.log(req.body);
    // debugger;

    var input = JSON.parse(JSON.stringify(req.body));

    var connFn = function (err, connection) {

        var data = {

            fname : input.fname,
            lname : input.lname,
            age   : input.age

        };

        // console.log(data.fname);

        var q = "INSERT INTO mytable set ? ";

        var qFn = function(err, rows)
        {
            if (err)
                console.log("Error inserting : %s ",err );

            res.redirect('/customers');
        };

        var query = connection.query(q,data, qFn);
    };

    req.getConnection(connFn);
};



exports.delete_customer = function(req,res)
{

    var id = req.params.id;

    var connFn = function (err, connection) {

        var q = "DELETE FROM mytable WHERE id = ? ";

        var qFn = function(err, rows)
        {
            if(err)
                console.log("Error deleting : %s ",err );

            res.redirect('/customers');
        };

        connection.query(q,[id],qFn);

    };

    req.getConnection(connFn);
};


exports.edit = function (req,res) {

    var id = req.params.id;

    var connFn = function (err, connection) {


        var q = 'SELECT * FROM mytable WHERE id = ?';

        var qFn = function (err, rows) {

            if (err) {
                console.log("Error Selecting : %s ", err);
            }

            res.render('edit_customer', {title: "Edit Customers Information Node.js", data: rows});
        //     console.log(data);
        };
        connection.query(q, [id], qFn);
    };
    req.getConnection(connFn);
};

exports.save_edit = function(req,res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;

    var connFn = function (err, connection) {

        var data = {

            fname : input.fname,
            lname : input.lname,
            age   : input.age
        };
        console.log(data.fname);

        var q = "UPDATE mytable set ? WHERE id = id ";

        var qFn = function(err, rows)
        {

        if (err)
            console.log("Error Updating : %s ",err );

        res.redirect('/customers');

    };

    connection.query(q,[data,id], qFn);
};
req.getConnection(connFn);
};



exports.look = function(req, res)
{
    res.render('dquery',{});
};

exports.display = function(req, res) {

    req.getConnection(function (err, connection)
    {
            var input = JSON.parse(JSON.stringify(req.body));

            var data1 = {

                fname: input.fname
                // lname:input.lname
            };

            // console.log(data1.fname);

        var query = connection.query("SELECT * FROM mytable where ?",[{fname:data1.fname}],function (err, rows)

        // var query = connection.query("SELECT * FROM mytable where ?",[{fname:data1.fname},{lname:data1.lname}],function (err, rows)
        // var query = connection.query("SELECT * FROM mytable where fname=?",[data1.fname],function (err, rows)

        {

            if (err)
            {
                console.log("Error Selecting : %s ", err);
            }

            res.render('test', {title: "Frist Express Customers - Node.js", data: rows});
        });
    });
};
