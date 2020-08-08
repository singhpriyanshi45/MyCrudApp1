let conn = require("../config/db_connection");
let connection = conn.getConnection();
let login = require("express").Router().post("/",(req,res)=>{
    connection.query(`select * from login_details where uname='${req.body.uname}' and upwd='${req.body.upwd}'`,
                        (err,records,fields)=>{
        if(err) throw err;
        else{
            if(records.length>0){
                res.send({"login":"success"});
            }else{
                res.send({"login":"fail"});
            }
        }
    });
});
module.exports = login;