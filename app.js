const express = require('express');
const moongose = require('mongoose');
const ejs = require('ejs');
const Post = require('./models/Post');

const app = express();

// CONNECT DB
moongose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const posts = await Post.find({});
  // const blog = { id: 1, title: "Blog title", description: "Blog description" }
  // res.send(blog)
  res.render('index', {
    posts: posts
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

// app.get('/post', (req, res) => {
//   res.render('post');
// });

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
