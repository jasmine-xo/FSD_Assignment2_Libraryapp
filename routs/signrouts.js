const express=require('express');
const signrouter=express.Router();


function router(nav){
    signrouter.get('/',function(req,res){
        res.render('signup',{
            nav,
            title:'Library'
        })
    })
    return signrouter;

}
module.exports=router;