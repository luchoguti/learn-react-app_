//dependecies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//assets
import logo from './img/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
     title : PropTypes.string.isRequired,
     ittems : PropTypes.array.isRequired
  };

  render() {

    const {title,ittems} = this.props;

    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h2 className="App-title">{title}</h2>
          <ul className="Menu">
            {
              ittems && ittems.map(
              (item,key)=><li key={key}><Link to={item.url}>{item.title}</Link></li>
              )
            }
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
