
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../store/actions';
import './ButtonAddFavourite.css';

class ButtonAddFavourite extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFavourite: this.props.favourites.favourites.includes(this.props.id)
    }
  }
  
  handleClick(id) {
    this.setState({
      isFavourite: !this.state.isFavourite
    },
    () => {
      if (this.state.isFavourite){
        this.props.dispatch(actions.addFavourite(id));
      } else {
        this.props.dispatch(actions.removeFavouriteById(id));
      }
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.state.isFavourite !== nextState.isFavourite;
  }

  render() {
    const { id, favourites } = this.props;
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

ButtonAddFavourite.propTypes = {
  id: PropTypes.string.isRequired,
  favourites: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => ({
  favourites: state.favourites
})

export default connect(mapStateToProps)(ButtonAddFavourite);
