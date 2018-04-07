import React, { Component } from 'react';
import './login.css';
import styled from 'styled-components'
import { Grid, Menu, Segment, Image, Container, Header, Button, Icon } from 'semantic-ui-react'
import BackgroundImage from '../Register/img/BG.png'

const Wrapper = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
`


class LoginHeader extends Component {
 

    render() {
        return (
            <div >
                <Wrapper />
                
            </div>
        );
    }
}

export default LoginHeader;
