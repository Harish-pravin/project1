var express=require('express')
var multer=require('multer');
var bodyparser=require('body-parser');
var mysql=require('mysql');
var cors=require('cors');
const { response, request } = require('express');
var app=express();
var upload=multer();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(upload.array());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));
var c=mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'Kgisl@123',
    database:'service_management'
});
c.connect(function(err){
    if(err){console.log(err);}
    else{
        console.log("Database connected");
    }
})
app.post('/login',(request,response)=>{

    let name = request.body.name;
    let password = request.body.password;

    let sql = 'select * from signin where name=?';

    c.query(sql,[name],(err,res)=>{
        if(err){
            let s = {"status":"username_error"};
            response.send(s);
        }
        else if(res.length > 0){
            let name1 = res[0].name;
            let password1 = res[0].password;
            let id = res[0].id;
            let role = res[0].role;

            if(name1 === name && password1 === password){
                let s = {"status":"Login_Successfully","id":id,"role":role};
                response.send(s);
            }
            else{
                let s = {"status":"Invalid_Login"};
                response.send(s);
            }
        }
        else{
            let s = {"status":"Invalid_Login"};
            response.send(s);
        }    
    })

})