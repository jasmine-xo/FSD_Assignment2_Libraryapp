const express=require('express');
const logrouter=express.Router();


function router(nav){
    logrouter.get('/',function(req,res){
        res.render('login',{
            nav,
            title:'Library'
        })
    })
    return logrouter;

}
module.exports=router;