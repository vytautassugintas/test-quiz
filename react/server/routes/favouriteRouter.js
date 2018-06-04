const express = require('express');
const fs = require('fs');

const FAVOURITES_FILE_URI = 'server/data/favourites.json';
const favouritesRouter = express.Router();

const getFavourites = function () {
    return readFavouritesFile();
};

const addFavourite = function (payload) {
    const favourites = readFavouritesFile();
    const content = [...favourites, payload.id];

    fs.writeFileSync('server/data/favourites.json', JSON.stringify(content), 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

const removeFavourite = function (payload) {
    const favourites = readFavouritesFile()
    const content = JSON.stringify(favourites.filter(id => id !== payload.id));
    
    fs.writeFileSync('server/data/favourites.json', content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

function readFavouritesFile(){
    return JSON.parse(fs.readFileSync(FAVOURITES_FILE_URI, 'utf8'));
}

favouritesRouter.get('', (req, res) => {
    const response = getFavourites();
    res.status(200).json(response);
});

favouritesRouter.post('', (req, res) => {
    addFavourite(req.body);
    res.sendStatus(200);
});

favouritesRouter.delete('', (req, res) => {
    removeFavourite(req.body);
    res.sendStatus(200);
})

module.exports = favouritesRouter;
