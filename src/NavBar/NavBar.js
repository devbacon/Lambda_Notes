import React, { Component } from 'react';
import './NavBar.css';
import logo from '../lambda_logo.png';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="Logo">
          <img src={logo} />
        </div>
        <div className="Options">
          <div className="Notes">Notes</div>
          <div className="Edit">Edit</div>
          <div className="Settings">Settings</div>
          <div className="Account">Account</div>
        </div>
        
      </div>
    );
  }
}

export default NavBar;