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
      dispatch: PropTypes.func.isRequired,
      favourites: PropTypes.object.isRequired
    }
  }

  componentDidMount(){
    this.props.dispatch(actions.fetchFavourites())
  }

  render() {
    const { loaded } = this.props.favourites;
    return (
      loaded 
        ? <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={BrowseContainer} />
              <Route path="/item/:id" component={ItemContainer} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        : <div className="has-text-centered">
            This should be loader or error (hint: start server 
            <code>yarn dev</code> or <code>npm run dev</code>)
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

const mapStateToProps = state => ({
  favourites: state.favourites
})

export default withRouter(connect(mapStateToProps)(Routes));
