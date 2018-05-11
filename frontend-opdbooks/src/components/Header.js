import React, { Component } from 'react';
import { Segment, Header, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import './../static/style/HomeCss.css';
import { Link } from 'react-router-dom';
import './../static/style/Navbar.css';

// const ImageSizeHeader = styled(Segment) `
//     width: 1400px; 
//     height: 1000px; 
//     left: -30px; 
//     top: -300px;
//     border-radius: 50px;
//     -webkit-transform: rotate(15deg);
//     -ms-transform: rotate(5deg);
//     transform: rotate(5deg);
//     position: absolute;    
//     background: -webkit-gradient(linear, right top, left top, from(#2F80ED), to(#33ADFF));
//     background: -webkit-linear-gradient(right, #2F80ED 0%, #33ADFF 100%);
//     background: -o-linear-gradient(right, #2F80ED 0%, #33ADFF 100%);
//     background: linear-gradient(to left, #2F80ED 0%, #33ADFF 100%); 
//     -webkit-box-shadow: 0px 50px 100px 0 rgba(47, 128, 237, 0.35);
//     box-shadow: 0px 50px 100px 0 rgba(47, 128, 237, 0.35);
// `

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <div className="image">
                    <h1 className="heading">OPD BOOK</h1>
                    <p><button className="btn btn-large" >Sign UP</button></p>
                </div>
            </div >

        )
    }
}