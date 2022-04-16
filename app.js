const express = require('express');
const moongose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');
const postController = require('./controllers/postController')
const pageController = require('./controllers/pageController')

const app = express();

// CONNECT DB
moongose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//ROUTES
app.get('/',postController.getAllPost);
app.get('/posts/:id',postController.getPost);
app.post('/posts',postController.createPost);
app.put('/posts/:id',postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

app.get('/about',pageController.getAboutPage);
app.get('/add_post',pageController.getAddPostPage);
app.get('/posts/edit/:id', pageController.getEditPage); //get request ile edit.ejs sayfasına yani post bilgileri güncelleme sayfasına yönlendirme


// app.get('/post', (req, res) => {
//   res.render('post');
// });

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
