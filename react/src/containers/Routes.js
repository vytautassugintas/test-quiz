import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import actions from '../store/actions';
import BrowseContainer from './BrowseContainer';
import ItemContainer from './ItemContainer';
import NavBar from '../components/NavBar';

class Routes extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired
    }
  }

  componentDidMount(){
    this.props.dispatch(actions.fetchFavourites())
  }

  render() {
    return ( 
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={BrowseContainer} />
            <Route path="/item/:id" component={ItemContainer} />
            <Route component={NoMatch} />
          </Switch>
        </div>
    );
  }
}

const NoMatch = () => (
  <div>
    <h3>
      Page not found 404
    </h3>
    <Link to='/'>To browse</Link>
  </div>
);

export default withRouter(connect()(Routes));
