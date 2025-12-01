const express = require('express')
const Book = require('./Book')
const app = express()
const port = 3000


const bookRouter = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', bookRouter)


let books = [new Book(1, "Dune", "sf", "Frank Herbert"),
new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
new Book(3, "Foundation", "sf", "Asimov")]

bookRouter.route('/books')
    .get((req, res) => {
        let filteredBooks = [];
        if (req.query.genre) {
            filteredBooks = books.filter(x => x.genre === req.query.genre)
        }
        else {
            filteredBooks = books;
        }
        res.json(filteredBooks);
    })
    .post((req, res) => {
        const { name, genre, author } = req.body;
        
        if (!name || !genre || !author) {
            return res.status(400).json({
                message: 'Err: Name, genre and author r required',
                fields_required: ['name', 'genre', 'author']
            });
        }

        const maxId = books.reduce((max, book) => (book.id > max ? book.id : max), 0);
        const newId = maxId + 1;

        let newBook = new Book(newId, name, genre, author);

        books.push(newBook);
        return res.status(201).json(newBook);
    });

bookRouter.route('/books/sorted')
    .get((req, res) => {
        let sortedBooks = [...books];

        sortedBooks.sort((a, b) => a.name.localeCompare(b.name));

        res.json(sortedBooks);
    });

bookRouter.route('/books/:bookId')
    .put((req, res) => {
        let bookModif = books.find(e => e.id === Number(req.params.bookId))

        if (!bookModif) {
            return res.status(404).json({ message: 'Book was not found.' });
        }
        bookModif.name = req.body.name;
        bookModif.genre = req.body.genre;
        bookModif.author = req.body.author;
        return res.json(bookModif)
    })
    .delete((req, res) => {
        const bookId = Number(req.params.bookId);
        const bookIndex = books.findIndex(book => book.id === bookId);

        if (bookIndex === -1) {
            return res.status(404).json({ message: `Cartea cu ID-ul ${bookId} nu a fost găsită.` });
        }

        books.splice(bookIndex, 1);
        return res.status(204).send(); 
    });

app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

app.listen(port, () => {
    console.log('Running on the port ' + port)
})

