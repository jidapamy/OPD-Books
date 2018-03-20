import React, { Component } from 'react';
import volunteer from './img/fd.png';
import './headerstle.css'
import { Link } from 'react-router'

class Header extends Component {
 

    render() {
        return (
            <div >
                <div class="sizeheader ui vertical center aligned segment">
                    <img src={volunteer} class="imgpo headerphoto ui fluid image " />
                    <div class="boxhd ui text container">
                        <h1 class="contitle ui inverted header">
                        Cover your page.
        </h1>
                        <h3 class="content ui inverted header">
                        Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.
        </h3>
                        <Link to='/register'><div class="conbutton ui massive white button">
                        Register
                        </div></Link>
                </div>
                </div>
            </div>
        );
    }
}

export default Header;
