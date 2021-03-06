//depencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//assets
import './css/Footer.css';

class Footer extends Component {
  static propTypes = {
     copyright : PropTypes.string
  };

  render() {
  	const {copyright ='&copy; React Software 2017' } = this.props;
    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{__html: copyright}}/>
      </div>
    );
  }
}

export default Footer;
