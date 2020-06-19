const express = require('express');
const booksRouter = express.Router();
const loginRouter = express.Router();
const signupRouter = express.Router();
const authorsRouter = express.Router();




const app = express();



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);



  app.get('/',function(req,res)
{
    res.render("index",{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'login'},{link:'/signup',name:'signup'}],
      title :'library'

    
    });  
    
 
   });
   

var books = [
{
  title : 'tom and jerry',
  author : 'William Hanna',
  genre : 'cartoon',
  img : 'tom.jpg',
},
{
  title : 'Vaikom Muhammad Basheer',
  author : 'Muhammad Basheer',
  genre : 'AutoBiography',
  img : 'bhasheer.jpg',
},
{
  title : 'My Story',
  author : 'Kamala Suraiyya',
  genre : 'AutoBiography',
  img : 'mystory.jpg',
}

]
// author details
var authors = [
  {
    title : 'William shakesSphere',
     author: 'MAcbeth',
    genre : 'DRAMA',
    img : 'william.jpg',
  },
  {
    title : 'J.K Rowling',
    author : 'Harry potter',
    genre : 'fantasy',
    img : 'jk.jpg',
  },
  {
    title : 'Charles Dickens',
    author : 'charles dickens',
    genre : 'fantasy',
    img : 'charles.jpg',
  }
  
]  

          // BOOKS
booksRouter.get('/',function(req,res){
    res.render("books",{
      nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'login'},{link:'/signup',name:'signup'}],
      title :'library',
      books
    
    });  
});
            //  AUthors
authorsRouter.get('/',function(req,res){
  res.render("authors",{
    nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'login'},{link:'/signup',name:'signup'}],
    title :'library',
    authors
  
  });  
});

                  //  login

     loginRouter.get('/',function(req,res){ 
       res.render("login",{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'login'},{link:'/signup',name:'signup'}],
        title :'library'
        
      

       });
       });

                      // signup
     signupRouter.get('/',function(req,res){ 
      res.render("signup",{
       nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'login'},{link:'/signup',name:'signup'}],
       title :'library'
       
     

      });




    });


    







 booksRouter.get('/:id',function(req,res){
   const id = req.params.id

  res.render ('book',{
     nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'login'},{link:'/signup',name:'signup'}],
      title :'library',
      book: books[id]
    });

   });
  

 authorsRouter.get('/:id1',function(req,res){
    const id1 = req.params.id1

   res.render('author',{
     nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'login'},{link:'/signup',name:'signup'}],
       title :'library',
      authors: author[id1]
  });

   });





app.listen(3000);