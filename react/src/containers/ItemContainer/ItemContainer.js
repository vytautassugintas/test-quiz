import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'
import { getPrice } from '../../helpers';
import StaticStrings from '../../staticStrings';
import actions from '../../store/actions'
import Card from '../../components/Card';
import ButtonAddFavourite from '../../components/ButtonAddFavourite';

class ItemContainer extends Component {
  static get propTypes() {
    return {
      match: PropTypes.object.isRequired,
      dispatch: PropTypes.func.isRequired,
      item: PropTypes.object.isRequired
    }
  }

  constructor(props){
    super(props)
    this.cardButtons = [
      {
        id: 0,
        title: StaticStrings.button.label.purchase
      },
      {
        id: 1,
        title: StaticStrings.button.label.makeOffer
      }
    ]
  }

  componentDidMount(){
    this.props.dispatch(actions.fetchItem(this.props.match.params.id));
  }

  render() {
    const { isLoading, item } = this.props.item;

    return (
      isLoading
        ? <div className="has-text-centered">
            This should be loader
          </div>
        : Object.keys(item).length
          ? <div className="container">
              <div className="columns">
                <div className="column is-one-third is-paddingless">
                  <Card
                    content={
                      <div>
                        <span className="is-pulled-right">
                          <ButtonAddFavourite id={item.id} />
                        </span>
                        <img
                          src={item.image} 
                          alt={item.title}
                        />
                      </div>
                    }
                  />
                </div>
                <div className="column is-paddingless">
                  <Card
                    content={
                      <div>
                        <h2 className="is-size-4">{item.title}</h2>
                        <h3 className="is-size-5">{getPrice(item.price)}</h3>
                        <div className="pading-top-md" style={{lineHeight: 1.3}}>
                          <p><strong>{StaticStrings.measurements}</strong></p>
                          <p>{item.measurements.display}</p>
                        </div>
                      </div>
                    }
                    footerButtons={this.cardButtons}
                  />
                  <Card
                    content={
                      <div>
                        <p>{item.description}</p>
                        <p style={{paddingTop: 12}}>
                          <strong>{StaticStrings.creators}</strong> {item.creators}
                        </p>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          : <Redirect from="/browse" to="/404" />
    );
  }
}

// const itemInformation = item => (
  
// )

const mapStateToProps = state => ({
  item: state.singleItem
})

export default withRouter(connect(mapStateToProps)(ItemContainer));
