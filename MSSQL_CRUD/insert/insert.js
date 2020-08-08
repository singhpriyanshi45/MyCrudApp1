let obj = require("../config/db_properties");
let mssql = require("mssql");
let insert = require("express").Router().post("/",(req,res)=>{
    mssql.connect(obj,(err)=>{
        if(err) throw err;
        else{
            let request = new mssql.Request();
            request.query(`insert into products values(${req.body.p_id},'${req.body.p_name}',${req.body.p_cost})`,
                                (err,result)=>{
                if(err) throw err;
                else{
                    res.send({insert:"success"});
                }
                mssql.close();
            });
        }
    });
});
module.exports = insert;