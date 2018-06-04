const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use('/browse', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));
app.use('/favourite', require('./routes/favouriteRouter'));

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});
