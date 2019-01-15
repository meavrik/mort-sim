import React, { Component } from 'react';
import './MainHeader.css';
import logo from '../assets/house.png';

class MainHeader extends Component {
    render() {
        return (
            <div className="main-header">

            
                <h2 className="main-title"><img src={logo} height="50" alt="logo"></img>Mortgage simulator</h2>
            </div>
        );
    }
}

export default MainHeader;
