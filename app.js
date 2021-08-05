const express=require('express');
// const authRouter=express.Router();
const app= express();
const port=process.env.PORT || 4000;
const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/addauth',name:'Add Author'
    },
    {
        link:'/signup',name:'Sign Up'
    },
    {
        link:'/login',name:'Log In'
    }

];

const booksRouter=require('./src/routs/bookRouts')(nav);
const authRouter=require('./src/routs/authRouts')(nav);
const adminRouter=require('./src/routs/adminRouts')(nav);
const addauthrouter=require('./src/routs/addauthrouts')(nav);
const signrouter=require('./src/routs/signrouts')(nav);
const logrouter=require('./src/routs/logrouts')(nav);
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/admin',adminRouter)
app.use('/addauth',addauthrouter);
app.use('/authors',authRouter);
app.use('/signup',signrouter);
app.use('/login',logrouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

app.listen(port,()=>{console.log("ready"+port)});
