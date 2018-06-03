
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ButtonAddFavourite.css';

class ButtonAddFavourite extends Component {
  constructor(props){
    super(props);
    this.state = {
      heartClass: 'far fa-heart'
    }
  }
  
  handleMouseOver(e) {
    this.setState({heartClass : 'fas fa-heart'})
  }

  handleMouseOut(e) {
    this.setState({heartClass : 'far fa-heart'})
  }

  handleClick(id) {
    // TODO: save item to favourites
    console.log(id);
  }

  render() {
    const { id } = this.props;
    const { heartClass = 'far fa-heart' } = this.state;

    return (
        <i
          onClick={() => this.handleClick(id)}
          onMouseEnter={this.handleMouseOver.bind(this)}
          onMouseLeave={this.handleMouseOut.bind(this)}
          className={`button-add-favorite ${heartClass}`}
        />
    );
  }
}

ButtonAddFavourite.propTypes = {
  id: PropTypes.string.isRequired
};

export default ButtonAddFavourite;
