import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import actions from '../../store/actions';
import staticStrings from '../../staticStrings';
import ItemsList from './ItemsList';

const ITEMS_TO_LOAD = 9;

class BrowseContainer extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
      shopItems: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    }
  }

  constructor(props){
    super(props);
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
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

  handleItemClick(id){
    this.props.history.push(`item/${id}`);
  }

  render() {
    const { items, isLoadMoreVissible } = this.props.shopItems;

    return (
      <div className="container">
        <ItemsList onItemClick={this.handleItemClick} items={items}/>
        <div className="has-text-centered padding-md">
        {
          isLoadMoreVissible
           ? <a onClick={this.handleLoadMoreClick} className="button is-rounded is-outlined is-medium">
                <span>{staticStrings.button.label.loadMore.toUpperCase()}</span>
              </a>
           : null
        }
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shopItems: state.shopItems
})

export default withRouter(connect(mapStateToProps)(BrowseContainer));
