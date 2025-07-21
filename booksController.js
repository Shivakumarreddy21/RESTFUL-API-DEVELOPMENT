const Book = require('../models/booksModel');

exports.getAllBooks = (req, res) => {
    Book.getAll((err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getBookById = (req, res) => {
    Book.getById(req.params.id, (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
};

exports.createBook = (req, res) => {
    Book.create(req.body, (err, results) => {
        if (err) throw err;
        res.json({ message: 'Book created successfully', book_id: results.insertId });
    });
};

exports.updateBook = (req, res) => {
    Book.update(req.params.id, req.body, (err) => {
        if (err) throw err;
        res.json({ message: 'Book updated successfully' });
    });
};

exports.deleteBook = (req, res) => {
    Book.delete(req.params.id, (err) => {
        if (err) throw err;
        res.json({ message: 'Book deleted successfully' });
    });
};
