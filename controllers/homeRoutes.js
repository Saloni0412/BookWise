const router = require('express').Router();
const { Book, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      //change this part accordingly
      const bookData = await Book.findAll({
        include: [
          {
            model: User,
          },
        ],
      });
  
   
      const books = bookData.map((book) => book.get({ plain: true }));
  
      // change this part according to handlebars name
      res.render('homepage', { 
        books, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //get specific book when logging in
  router.get('/book/:id', async (req, res) => {
    try {
        //change this part accordingly
      const bookData = await Book.findByPk(req.params.id, {
        include: [
          {
            model: User,
          },
        ],
      });
  
      const book = bookData.get({ plain: true });

      //change this part according to handlebars
      res.render('bookshelf', {
        ...book,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Use withAuth middleware to prevent access to route
router.get('/book', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Book }],
      });
  
      const user = userData.get({ plain: true });

      //change this part accoring to handlebars name
      res.render('bookshelf', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //login
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        //need change directly according to handlebars
      res.redirect('/book');
      return;
    }
  
    res.render('login');
  });
  
  //signup
  router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        //need change directly according to handlebars
      res.redirect('/book');
      return;
    }
  
    res.render('signup');
  });

  module.exports = router;