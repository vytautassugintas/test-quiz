## 1stdibs.com front-end developer React quiz

Using React and Flux architecture render Single Page Application with these pages:
- Browse - all the items on the page, [browse example](./examples/browse.png)
- Item - detail page with more info about the item, [item example](./examples/item.png)

### Server side notes
Steps to run local server:
- `npm install` - install dependencies
- `npm run start` - run webpack server
- `npm run dev` - run Express.js server

At this point you should be able to access `localhost:3000` in your browser.

*Everything should work with Node `v8.0.0` and up.*

### Client side notes
Page JavaScript files are located in `/src` folder.

Webpack will compile all your CSS and JS assets.

### Requirements
**Browse page:**

- Fetch items data from server side using this endpoint: `[GET] /browse`
- Render items, example [layout](./examples/browse.png)
- Add `Load More` button, which should fetch additional items from the same endpoint

**Item page:**

- Fetch item data from server side using this endpoint: `[GET] /item/{id}`
- Render item, example [layout](./examples/item.png)

**Bonus points:**
Add item favoriting:
- Item can be added and removed to/from favorites from both pages by clicking on the `heart` icon
- Favorited items should be stored server side (db, file or your own solution)
- Examples: [favorite on browse](./examples/favorite-browse.png) and [favorite on item](./examples/favorite-item.png)

### Other Notes:
- Initial App setup is done with [Create React App](https://github.com/facebookincubator/create-react-app)
- You can use any [Flux](https://facebook.github.io/flux/) framework, Redux is preferable, but not a must 
- You can use [ES6 features](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills)
- You can change Create React App or Express.js configs/setup as you like
- You can use any framework for CSS or just write your own styles. Don't need to totally match given examples

### Mini backlog
Observations from ```items.json```
- not all of them have price
------
- [x] service: add favorite item
- [x] save favourite item id
- [x] save to file (json)
-------
- [x] items reducer
- [x] holds fetched items
- ~~[ ] holds favourite items ids~~
- ~~[ ] checks if fetched items contains favoutire~~
-------
- [x] item reducer
- [x] loads single item
- ~~[ ] works as cache for already visited items~~
-------
- [x] card component
- [x] card can have image
- [x] card can have buttons
- [x] card can have price slot and favourite icon
- [x] card can have header and details slot
- [x] favourite can be displayed either on top or bottom
- [x] callback when image was clicked
-------
- [x] browse container
- [x] it should store variables how many items should be fetched
- [x] handle favourite click (dispatches action with item id) 
- [x] handles item image click (changes route to item container and ataches item id)
- [x] contains list of items (component which renders list)
-------
- [x] item container
- [x] fetches or uses already checked single item data from item reducer
- [x] show three different cards
- [x] handles favourite click (dispatches action with item id)
------
- [x] tools that i need: redux, redux-thunk, react-router, axios?(maybe fetch is enough)
------