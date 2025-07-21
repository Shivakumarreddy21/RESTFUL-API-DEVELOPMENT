const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/booksRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api', bookRoutes);

app.listen(3000, () => {
    console.log('Library API running on http://localhost:3000');
});
