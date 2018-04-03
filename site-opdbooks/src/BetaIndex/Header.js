import React, { Component } from 'react';
import { Grid, Menu, Segment, Image, Container, Header, Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import './style.css';
import { Link } from 'react-router-dom';

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

export default class MenuExampleSecondaryPointing extends Component {

    render() {
        

        return (
            <div>
<Header className="ContainHeaderTop" style={{ fontSize: '6em', color: 'white' }} >PROJECT OPD BOOKS</Header>
    <Header className="ContainHeaderMid" style={{ fontSize: '2em', color: 'white' }} >Patient Registration Management By Blockchain</Header>
    <Link to='/register'><Button className="ButtonHeaderMid" style={{ fontSize: '3em' }} inverted>Sign UP</Button></Link>

    <ImageSizeHeader style={{ border: '0px' }}></ImageSizeHeader>
                
            
          
<div class='headerTheme'></div>

{/* <Image src={BG} /> */ }
            
            
            </div >
     
        )
    }
}