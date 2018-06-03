import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../../components/Card';

class ItemList extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className='columns is-multiline is-mobile is-centered'>
        {
          items.map(item => (
            <Card
              key={ item.id }
              id={ item.id }
              image={ item.image }
              showPrice={ true }
              price={ item.price }  
            />
          ))
        }
      </div>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemList;
