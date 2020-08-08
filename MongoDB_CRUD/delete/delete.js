let mongodb = require("mongodb");
let nareshIT = mongodb.MongoClient;
let remove = require("express").Router().delete("/",(req,res)=>{
    nareshIT.connect("mongodb://localhost:27017/crud",(err,db)=>{
        if(err) throw err;
        else{
           db.collection("products").deleteOne({"p_id":req.body.p_id},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({delete : "success"});
                }
           });
        }
    });
});
module.exports = remove;