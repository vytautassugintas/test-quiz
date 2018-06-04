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
              showPriceInline
              withImage
              key={item.id}
              item={item}
              onImageClick={() => this.props.onItemClick(item.id)}
            />
          ))
        }
      </div>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func
}

export default ItemList;
