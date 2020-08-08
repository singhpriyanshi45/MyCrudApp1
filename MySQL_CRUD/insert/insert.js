let conn = require("../config/db_connection");
let connection = conn.getConnection();
let insert = require("express").Router().post("/",(req,res)=>{
    connection.query(`insert into products values(${req.body.p_id},'${req.body.p_name}',${req.body.p_cost})`,
                                                                                                (err,result)=>{
            if(err) throw err;
            else{
                res.send({insert:"success"});
            }
    });
});
module.exports = insert;