import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StaticStrings from '../../staticStrings';
import ButtonAddFavourite from '../ButtonAddFavourite';

class Card extends Component {
  static get propTypes(){
    return {
      onImageClick: PropTypes.func,
      withButtons: PropTypes.bool,
      withHeader: PropTypes.bool,
      withDescription: PropTypes.bool,
      withImage: PropTypes.bool,
      showPriceInline: PropTypes.bool,
      item: PropTypes.object.isRequired
    }
  }

  shouldComponentUpdate(nextProps){
    return this.props.item.id !== nextProps.item.id;
  }
  
  getPrice(price) {
    return price
      ? price.amounts.USD
      : StaticStrings.unknownPrice
  }

  render() {
    const {
      item,
      onImageClick,
      withButtons,
      withHeader,
      withDescription,
      withImage,
      showPriceInline,
    } = this.props;

    const textAlignmentClass = withHeader || withDescription
      ? 'has-text-left is-red'
      : 'has-text-centered'

    return (
      <div className={"card margins-md"}>
        <div className={`card-content ${textAlignmentClass}`}>
        {
            withHeader
              ? <div>
                  <h2 className="is-size-4">{item.title}</h2>
                  <h3 className="is-size-5">{this.getPrice(item.price)}</h3>
                  <div className="pading-top-md" style={{lineHeight: 1.3}}>
                    <p><strong>{StaticStrings.measurements}</strong></p>
                    <p>{item.measurements.display}</p>
                  </div>
                </div>
              : null
          }
          {
            withDescription
              ? <div>
                  <p>{item.description}</p>
                  <p style={{paddingTop: 12}}>
                    <strong>{StaticStrings.creators}</strong> {item.creators}
                  </p>
                </div>
              : null
          }
          { withImage
              ? <div>
                  {
                    showPriceInline
                      ? null
                      : <span className="is-pulled-right">
                          <ButtonAddFavourite id={item.id} />
                        </span>
                  }
                  <img
                    onClick={onImageClick} 
                    style={{cursor: 'pointer'}}
                    src={item.image} 
                    alt={item.title}
                  />
                </div>
              : null
          }
          {
            showPriceInline
              ? <div style={{paddingBottom: 12}}>
                  <span className="is-pulled-left">{this.getPrice(item.price)}</span>
                  <span className="is-pulled-right">
                    <ButtonAddFavourite id={item.id} />
                  </span>
                </div>
              : null
          }
        </div>
        {
          withButtons
            ? <footer className="card-footer">
                <a className="card-footer-item">
                  {StaticStrings.button.label.purchase}
                </a>
                <a className="card-footer-item">
                  {StaticStrings.button.label.makeOffer}
                </a>
              </footer>
            : null
        }
      </div>
    );
  }
}

export default Card;
