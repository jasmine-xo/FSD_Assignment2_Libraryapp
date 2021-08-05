const express=require('express');
const addauthrouter=express.Router();


function router(nav){
    addauthrouter.get('/',function(req,res){
        res.render('addauth',{
            nav,
            title:'Library'
        })
    })
    return addauthrouter;

}
module.exports=router;