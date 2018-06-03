
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import staticStrings from '../../staticStrings';
import { DIBS_CDN_URL } from '../../config';

const navStyle = {
  height: 50,
  padding: 8,
  marginBottom: 16
}

class NavBar extends Component {
  constructor(props){
    super(props);

    this.routeHome = this.routeHome.bind(this);
  }

  getSellerLogo(item){
    return item.seller && item.seller.logo
      ? `${DIBS_CDN_URL}${item.seller.logo}`
      : ''
  }

  routeHome(){
    this.props.history.goBack();
  }

  render() {
    const { item } = this.props.selectedItem;
    const showSellerLogo = this.props.location.pathname !== '/';

    return (
      <nav style={navStyle} role="navigation" aria-label="main navigation">
        {
          showSellerLogo
            ? <div className="has-text-centered">
                <span style={{cursor: 'pointer'}} className="is-pulled-left">
                  <i 
                    className="fas fa-chevron-left"
                    onClick={this.routeHome}  
                  />
                </span>
                <img src={this.getSellerLogo(item)}/>
              </div>
            : <p className="is-size-5 has-text-centered">{staticStrings.page.title.browsePage}</p>
        }
      </nav>
    );
  }
}

NavBar.propTypes = {
  selectedItem: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = state => ({
  selectedItem: state.singleItem
})

export default withRouter(connect(mapStateToProps)(NavBar));