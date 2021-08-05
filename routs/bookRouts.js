const express=require('express');
const booksRouter= express.Router();
function router(nav){
    var books=[
        {
            title:'The Hobbit',
            author:'J. R. R. Tolkien',
            genre:'Fantasy',
            img:"hob.jpg"
        },
        {
            title:'Harry Potter',
            author:'J K Rowling',
            genre:'Fantasy',
            img:"harry.jpeg"
        },
        {
            title:'Inferno',
            author:'Dan Brown',
            genre:'Thriller',
            img:"inf.jpg"
        }
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title:'Library',
            books
        });
    
    });
    booksRouter.get('/:i',function(req,res){
        const i=req.params.i;
        res.render('book',{
            nav,
            title:'Library',
            book:books[i]
        });
    
    });
    return booksRouter;

}


module.exports = router;