const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const bookRouter = express.Router();
const port = 5000;
const Book = require('./models/bookModel');

mongoose.connect('mongodb://localhost:27017/bookAPI', (err) => {
    if (err) {
        console.log("Not connected");
    } else {
        console.log("succssfully connected");   //Database connection
    }
});
bookRouter.route('/books')
    .get((req, res) => {
        const query = {};
        if (req.query.name) {
            query.name = req.query.name;
        }
        Book.find(query, (err, books) => {
            if (err) {
                return res.send(err);
            }
            return res.json(books);
        });
    });
bookRouter.route('/books/:Id')
    .get((req, res) => {
        Book.findById(req.params.Id, (err, book) => {
            if (err) {
                return res.send(err);
            }
            return res.json(book);
        });
    });
app.use('/api', bookRouter);
app.get('/', (req, res) => {
    res.send('welecome to my Nodemon API!');
});

app.listen(port, () => {
    console.log(`Running in port ${port}`);
});