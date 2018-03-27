import React, { Component } from 'react';
import {  Grid, Menu, Segment, Image,Container,Header,Button,Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import './style.css';
import { Link } from 'react-router-dom';
import PhotoHeader from './img/photoHeader.png';
const imgheader = styled.img `
     width:100%;
`
const ImageSizeHeader = styled(Segment) `
    width: 1400px; 
    height: 1000px; 
    left: -20px; 
    top: -300px;
    border-radius: 50px;
    -webkit-transform: rotate(15deg);
    -ms-transform: rotate(5deg);
    transform: rotate(5deg);
    position: absolute;    
    background: -webkit-gradient(linear, right top, left top, from(#2F80ED), to(#33ADFF));
    background: -webkit-linear-gradient(right, #2F80ED 0%, #33ADFF 100%);
    background: -o-linear-gradient(right, #2F80ED 0%, #33ADFF 100%);
    background: linear-gradient(to left, #2F80ED 0%, #33ADFF 100%); 
    -webkit-box-shadow: 0px 50px 100px 0 rgba(47, 128, 237, 0.35);
    box-shadow: 0px 50px 100px 0 rgba(47, 128, 237, 0.35);
`
const ImageSizeHeader2 = styled(Header) `
     
     background-color:red;
    
`
const ContainHeaderTop = styled(Header) `
    position: absolute;
    right: 450px;
    top: 190px;
    z-index: 5;
 
`
const ContainHeaderMid = styled(Header) `
    position: absolute;
    right: 450px;
    top: 290px;
    z-index: 5;
    
`
const ButtonHeaderMid = styled(Button) `
    position: absolute;
    right: 450px;
    top: 370px;
    z-index: 5;
    
`


export default class MenuExampleSecondaryPointing extends Component {
    
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu fixed='top'>
                <Menu pointing secondary attached='top' color='teal' size='huge' >
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right' >
                        <Link to='/login'><Menu.Item name='Sign In' active={activeItem === 'Sign In'} onClick={this.handleItemClick} /></Link>
                        <Link to='/register'><Menu.Item name='Sign Up' active={activeItem === 'Sign Up'} onClick={this.handleItemClick} /></Link>
                    </Menu.Menu>
                </Menu>
           </Menu>
                <Header className="ContainHeaderTop" style={{ fontSize: '6em',color:'white' }} >PROJECT OPD BOOKS</Header>
                <Header className="ContainHeaderMid" style={{ fontSize: '2em', color: 'white' }} >Patient Registration Management By Blockchain</Header>
                <Link to='/register'><Button className="ButtonHeaderMid" style={{ fontSize: '3em' }} inverted>Sign UP</Button></Link>
                
                <ImageSizeHeader style={{ border: '0px' }}></ImageSizeHeader>
                
                
            <div class='headerTheme'></div>
            
            {/* <Image src={BG} /> */}
            </div>
            
            
        )
    }
}