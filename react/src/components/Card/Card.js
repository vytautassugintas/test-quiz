import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  static get propTypes(){
    return {
      content: PropTypes.object,
      footerButtons: PropTypes.array
    }
  }

  render() {
    const { content, footerButtons } = this.props;

    return (
      <div className="card margins-md">
        <div className="card-content">
          {
            content
          }
        </div>
        {
          footerButtons
            ? <footer className="card-footer">
                { 
                  footerButtons.map(button => 
                    <a key={button.id} className="card-footer-item">{button.title}</a>
                  )
                }
              </footer>
            : null
        }
      </div>
    );
  }
}

export default Card;
