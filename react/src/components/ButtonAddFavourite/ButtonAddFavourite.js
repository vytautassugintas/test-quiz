
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../store/actions';
import './ButtonAddFavourite.css';

class ButtonAddFavourite extends Component {
  static get propTypes(){
    return {
      id: PropTypes.string.isRequired,
      favourites: PropTypes.object.isRequired,
      dispatch: PropTypes.func.isRequired
    }
  }

  constructor(props){
    super(props);
    const { id, favourites } = this.props;
    this.state = {
      isFavourite: favourites.items.includes(id)
    }
  }

  static getDerivedStateFromProps(nextProps){
      return { 
        isFavourite: nextProps.favourites.items.includes(nextProps.id) 
      }
  }
  
  handleClick(id) {
    if (!this.state.isFavourite){
      this.props.dispatch(actions.addFavourite(id));
    } else {
      this.props.dispatch(actions.removeFavouriteById(id));
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.state.isFavourite !== nextState.isFavourite;
  }

  render() {
    const { id } = this.props;
    const { isFavourite } = this.state;
    
    const heartClass = isFavourite ? 'fas fa-heart is-red' : 'far fa-heart';

    return (
        <i
          onClick={() => this.handleClick(id)}
          className={`button-add-favorite ${heartClass}`}
        />
    );
  }
}

const mapStateToProps = state => ({
  favourites: state.favourites
})

export default connect(mapStateToProps)(ButtonAddFavourite);
