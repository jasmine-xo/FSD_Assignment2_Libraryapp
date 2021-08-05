const express=require('express');
const authRouter= express.Router();
function router(nav){
    var authors=[
        {
            // title:'Tom and Jerry',
            authorname:'J. R. R. Tolkien',
            nationality:'British',
            genre:'Fantasy',
            img:"to.jpg"
        },
        {
            // title:'Harry Potter',
            authorname:'J K Rowling',
            nationality:'British',
            genre:'Fantasy',
            img:"jk.jpg"
        },
        {
            // title:'Inferno',
            authorname:'Dan Brown',
            nationality:'American',
            genre:'Thriller',
            img:"dan.jpg"
        }
    ]
    authRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    
    });
    authRouter.get('/:i',function(req,res){
        const i=req.params.i;
        res.render('author',{
            nav,
            title:'Library',
            author:authors[i]
        });
    
    });
    return authRouter;

}


module.exports = router;