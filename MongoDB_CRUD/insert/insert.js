let mongodb = require("mongodb");
let nareshIT = mongodb.MongoClient;
let insert = require("express").Router().post("/",(req,res)=>{
    nareshIT.connect("mongodb://localhost:27017/crud",(err,db)=>{
        if(err) throw err;
        else{
           db.collection("products").insertOne({"p_id":req.body.p_id,
                                                "p_name":req.body.p_name,
                                                "p_cost":req.body.p_cost},(err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({insert : "success"});
                    }
           });
        }
    });
});
module.exports = insert;