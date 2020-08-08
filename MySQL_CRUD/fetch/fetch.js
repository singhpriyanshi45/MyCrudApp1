let conn = require("../config/db_connection");
let connection = conn.getConnection();
let fetch = require("express").Router().get("/",(req,res)=>{
    connection.query(`select * from products`,(err,records,fields)=>{
        if(err) throw err;
        else{
            res.send(records);
        }
    });
});
module.exports = fetch;