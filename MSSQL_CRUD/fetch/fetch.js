let obj = require("../config/db_properties");
let mssql = require("mssql");
let fetch = require("express").Router().get("/",(req,res)=>{
   mssql.connect(obj,(err)=>{
        if(err) throw err;
        else{
            let request = new mssql.Request();
            request.query(`select * from products`,(err,records)=>{
                if(err) throw err;
                else{
                    res.send(records.recordset);
                }
                mssql.close();
            });
        }
   });
});
module.exports = fetch;