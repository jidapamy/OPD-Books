import React, { Component } from 'react';
import { Segment, Header, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import './../../Static/Style/HomeCss.css';
import { Link } from 'react-router-dom';
import './../../Static/Style/Navbar.css';

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <div className="image">
                    <h1 className="heading">OPD BOOK</h1>
                    <Link to='/signup'><p><button className="btn btn-large" >Sign UP</button></p></Link>
                </div>
            </div >

        )
    }
}