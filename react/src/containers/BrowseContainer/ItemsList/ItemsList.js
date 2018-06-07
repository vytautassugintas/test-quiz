import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Card from '../../../components/Card';
import Item from './Item';

class ItemList extends Component {
  static get propTypes(){
    return {
      items: PropTypes.array.isRequired,
      onItemClick: PropTypes.func.isRequired
    }
  }

  render() {
    const { items } = this.props;

    return (
      <div className='columns is-multiline is-mobile is-centered'>
        {
          items.map(item => (
            <Item
              key={item.id}
              item={item}
              onItemClick={() => this.props.onItemClick(item.id)}
            />
            // <Card
            //   showPriceInline
            //   withImage
            //   key={item.id}
            //   item={item}
            //   onImageClick={() => this.props.onItemClick(item.id)}
            // />
          ))
        }
      </div>
    );
  }
}

export default ItemList;
