import React, { Component } from 'react';
import { Link } from 'react-router'
import './headerstle.css'
class Navbar extends Component {

  render() {
    return (
      <div >
        <div class="header ui large top fixed inverted menu">
          <div class=" ui container inverted ">
            <a class=" active item">Home</a><a class="item">About</a>
                <div class="right menu">
                  <div class="menu item">
                    <a class="ui button">Log in</a>
                  </div>
                  <Link to='/register'><div class="menu item">
                    <a class="ui primary button">Sign Up</a>
                  </div></Link>
                </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Navbar;