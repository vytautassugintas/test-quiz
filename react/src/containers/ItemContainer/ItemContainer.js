import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'
import Card from '../../components/Card';
import actions from '../../store/actions'

class ItemContainer extends Component {
  static get propTypes() {
    return {
      match: PropTypes.object.isRequired,
      dispatch: PropTypes.func.isRequired,
      item: PropTypes.object.isRequired
    }
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
                    withImage
                    item={item}
                  />
                </div>
                <div className="column is-paddingless">
                  <Card
                    withHeader
                    withButtons
                    item={item}
                  />
                  <Card
                    withDescription
                    item={item}
                  />
                </div>
              </div>
            </div>
          : <Redirect from="/browse" to="/404" />
    );
  }
}

const mapStateToProps = state => ({
  item: state.singleItem
})

export default withRouter(connect(mapStateToProps)(ItemContainer));
