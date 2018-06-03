import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StaticStrings from '../../staticStrings';

class Card extends Component {
  
  getPrice(price) {
    return price
      ? price.amounts.USD
      : StaticStrings.priceUnknown
  }

  render() {
    const {
      id,
      image,
      price,
      withButtons
    } = this.props;

    return (
      <div className="card">
        <div className="card-content has-text-centered">
          { image
              ? <div>
                  {
                    price
                      ? null
                      : <span className="is-pulled-right">
                          <i className="far fa-heart"/>
                        </span>
                  }
                  <img src={ image } alt={ image }/>
                </div>
              : null
          }
          {
            price
              ? itemPrice(this.getPrice(price))
              : null
          }
        </div>
        {
          withButtons
            ? cardButtons
            : null
        }
      </div>
    );
  }
}

const itemPrice = price => (
  <div style={ {paddingBottom: 12} }>
    <span className="is-pulled-left">{ price }</span>
    <span className="is-pulled-right">
      <i className="far fa-heart"/>
    </span>
  </div>
)

const cardButtons = (
  <footer className="card-footer">
    <a href="#" className="card-footer-item">
      { StaticStrings.button.label.purchase }
    </a>
    <a href="#" className="card-footer-item">
      { StaticStrings.button.label.makeOffer }
    </a>
  </footer>
)

Card.propTypes = {
  id: PropTypes.string,
  price: PropTypes.object,
  image: PropTypes.string,
  withButtons: PropTypes.bool
};

export default Card;