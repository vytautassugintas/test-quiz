import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BrowseContainer from './BrowseContainer';
import ItemContainer from './ItemContainer';
import NavBar from '../components/NavBar';

class Routes extends Component {  
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={BrowseContainer} />
        <Route path="/item/:id" component={ItemContainer} />
      </div>
    );
  }
}

export default Routes;
