const Post = require('../models/Post');

exports.getAboutPage = (req, res) => {
    res.render('about');
  }

 exports.getAddPostPage = (req, res) => {
    res.render('add_post');
  }

  exports.getEditPage = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/photos/edit/:id isteğine karşılık edit.ejs dosyasını render ederiz.
    res.render('edit', {
      post,
    });
  }