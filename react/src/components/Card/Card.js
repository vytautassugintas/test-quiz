import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StaticStrings from '../../staticStrings';

const measurementsStyle = {
  lineHeight: 1.3
}

class Card extends Component {
  
  getPrice(price) {
    return price
      ? price.amounts.USD
      : StaticStrings.unknownPrice
  }

  render() {
    const {
      id,
      image,
      price,
      withButtons,
      showPriceInline,
      onImageClick,
      withHeader,
      header,
      measurements,
      withDescription,
      description,
      creators
    } = this.props;

    const textAlignmentClass = withHeader || withDescription
      ? 'has-text-left'
      : 'has-text-centered'

    return (
      <div className="card margins-md">
        <div className={`card-content ${textAlignmentClass}`}>
          { image
              ? <div>
                  {
                    showPriceInline
                      ? null
                      : <span className="is-pulled-right">
                          <i className="far fa-heart"/>
                        </span>
                  }
                  <img onClick={onImageClick} src={ image } alt={ image }/>
                </div>
              : null
          }
          {
            showPriceInline
              ? itemPrice(this.getPrice(price))
              : null
          }
          {
            withHeader
              ? <div>
                  <h2 className="is-size-4">{header}</h2>
                  <h3 className="is-size-5">{this.getPrice(price)}</h3>
                  <div className="pading-top-md" style={measurementsStyle}>
                    <p><strong>{StaticStrings.measurements}</strong></p>
                    <p>{measurements}</p>
                  </div>
                </div>
              : null
          }
          {
            withDescription
              ? <div>
                  <p>{description}</p>
                  <p style={{paddingTop: 12}}><strong>{StaticStrings.creators}</strong> {creators}</p>
                </div>
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
  onImageClick: PropTypes.func,
  withButtons: PropTypes.bool,
  withHeader: PropTypes.bool,
  withDescription: PropTypes.bool,
  showPriceInline: PropTypes.bool,
  id: PropTypes.string,
  price: PropTypes.object,
  image: PropTypes.string,
  header: PropTypes.string,
  measurements: PropTypes.string,
  description: PropTypes.string,
  creators: PropTypes.string,
};

export default Card;
