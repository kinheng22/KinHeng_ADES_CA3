var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'lengkinheng001',
    database:'myquiz'
});

var server = app.listen(3001, function(){
    var host = server.address().address
    var port = server.address().port
})

con.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Connected");
    }
})

app.get('/questions', function(req,res){
    con.query('select * from questions', function(error, rows){
        if (error){
            console.log(error);
        }
        else{
            console.log(rows);
            res.send(rows);
        }
    })
})

app.get('/answer', function(req,res){
    con.query('select * from answer', function(error, rows){
        if (error){
            console.log(error);
        }
        else{
            console.log(rows);
            res.send(rows);
        }
    })
})

