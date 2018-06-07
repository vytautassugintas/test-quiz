import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  static get propTypes(){
    return {
      hasTextCenter: PropTypes.bool,
      content: PropTypes.object,
      footerButtons: PropTypes.array
    }
  }

  render() {
    const { content, footerButtons, hasTextCenter } = this.props;
    const textAlignmentClass = hasTextCenter ? 'has-text-centered' : 'has-text-left';
    
    return (
      <div className="card margins-md">
        <div className={`card-content ${textAlignmentClass}`}>
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
