let obj = require("../config/db_properties");
let mssql = require("mssql");
let update = require("express").Router().put("/",(req,res)=>{
    mssql.connect(obj,(err)=>{
        if(err) throw err;
        else{
            let request = new mssql.Request();
            request.query(`update products set p_name='${req.body.p_name}',p_cost=${req.body.p_cost} where p_id=${req.body.p_id}`,(err,result)=>{
                if(err) throw err;
                else{
                    res.send({update:"success"});
                }
                mssql.close();
            });
        }
    });
});
module.exports = update;