import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import actions from '../../store/actions';
import staticStrings from '../../staticStrings';

const ITEMS_TO_LOAD = 9;

class BrowseContainer extends Component {
  constructor(props){
    super(props);
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
  }

  componentDidMount(){
    const { start, limit, items } = this.props.shopItems;
    this.start = start;
    this.limit = limit;
    if (!items.length){
      this.props.dispatch(actions.fetchItems());
    }
  }

  handleLoadMoreClick(){
    const { totalItems } = this.props.shopItems;
    this.start = this.limit;
    this.limit = this.limit < totalItems
      ? this.limit + ITEMS_TO_LOAD
      : this.limit = totalItems

    this.props.dispatch(actions.fetchItems({
      start: this.start, 
      limit: this.limit
    }));
  }

  render() {
    return (
      <div className="container">
        This is Browse
        <div className="has-text-centered">
          <a onClick={this.handleLoadMoreClick} className="button is-rounded is-outlined is-medium">
            <span>{staticStrings.button.label.loadMore.toUpperCase()}</span>
          </a>
        </div>
      </div>
    );
  }
}

BrowseContainer.propTypes = {
  dispatch: PropTypes.func,
  shopItems: PropTypes.object,
};

const mapStateToProps = state => ({
  shopItems: state.shopItems
})

export default withRouter(connect(mapStateToProps)(BrowseContainer));
