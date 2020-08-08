let obj = require("../config/db_properties");
let mssql = require("mssql");
let remove = require("express").Router().delete("/",(req,res)=>{
    mssql.connect(obj,(err)=>{
        if(err) throw err;
        else{
            let request = new mssql.Request();
            request.query(`delete from products where p_id=${req.body.p_id}`,(err,result)=>{
                if(err) throw err;
                else{
                    res.send({delete:"success"});
                }
            });
        }
    });
});
module.exports = remove;