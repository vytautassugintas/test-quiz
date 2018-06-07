import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPrice } from '../../../../helpers';
import ButtonAddFavourite from '../../../../components/ButtonAddFavourite';
import Card from '../../../../components/Card';

class Item extends Component {
  static get propTypes(){
    return {
      item: PropTypes.object.isRequired,
      onItemClick: PropTypes.func.isRequired
    }
  }

  render() {
    const { item, onItemClick } = this.props;

    return (
      <Card
        hasTextCenter
        content={
          <div>
            <img
              onClick={onItemClick} 
              style={{cursor: 'pointer'}}
              src={item.image} 
              alt={item.title}
            />
            <div style={{paddingBottom: 12}}>
              <span className="is-pulled-left">{getPrice(item.price)}</span>
              <span className="is-pulled-right">
                <ButtonAddFavourite 
                  id={item.id} 
                />
              </span>
            </div>
          </div>
        }
      />
    );
  }
}

export default Item;
