const router = require('express').Router();
const { User, Book } = require('../../models');
const getBookImage = require('../../utils/bookImage');

router.get('/', async (req, res) => {
    try {
      const books = await Book.findAll({include: [{ model: Book }],});
      res.status(200).json(books);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/:id', async (req, res) => {
    try {
      const book = await Book.findByPk(req.params.id, {include: [{ model: Book }],});
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.post('/', async (req, res) => {
    const bookImage = await getBookImage(req.body.name);
    try {
      const createBook = await Book.create(
        {
        ...req.body,
        imageURL: bookImage,
        user_id: req.session.user_id,
      });
      res.status(200).json(createBook);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const updateBook = await Book.update(req.body, {
        where: 
        {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      res.status(200).json(updateBook);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const deleteBook = await Book.destroy({where: {id: req.params.id,},});
      res.status(200).json(deleteBook);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;