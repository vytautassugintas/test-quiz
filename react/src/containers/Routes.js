import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import actions from '../store/actions';
import BrowseContainer from './BrowseContainer';
import ItemContainer from './ItemContainer';
import NavBar from '../components/NavBar';

class Routes extends Component {
  componentDidMount(){
    this.props.dispatch(actions.fetchFavourites())
  }

  render() {
    const { loaded } = this.props.favourites;
    return (
      loaded 
        ? <div>
            <NavBar />
            <Route exact path="/" component={BrowseContainer} />
            <Route path="/item/:id" component={ItemContainer} />
          </div>
        : <span>This should be loader</span>  
    );
  }
}

const mapStateToProps = state => ({
  favourites: state.favourites
})

export default withRouter(connect(mapStateToProps)(Routes));
