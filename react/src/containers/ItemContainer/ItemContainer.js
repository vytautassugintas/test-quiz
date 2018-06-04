import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Card from '../../components/Card';
import actions from '../../store/actions'

class ItemContainer extends Component {

  componentDidMount(){
    this.props.dispatch(actions.fetchItem(this.props.match.params.id));
  }

  render() {
    const { isLoading, item } = this.props.item;
    return (
      isLoading
        ? <span>This should be loader</span>
        : <div className="container">
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
    );
  }
}

ItemContainer.propTypes = {
  match: PropTypes.object,
  dispatch: PropTypes.func,
  item: PropTypes.object
}

const mapStateToProps = state => ({
  item: state.singleItem
})

export default withRouter(connect(mapStateToProps)(ItemContainer));
