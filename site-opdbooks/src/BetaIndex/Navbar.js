import React, { Component } from 'react';
import {  Grid, Menu, Segment, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const imgheader = styled.img `
     width:100%;
`
const ImageSizeHeader = styled(Image) `
     width:1480px;
     height:850px;
     
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
                    <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right' >
                        <Menu.Item name='Sign In' active={activeItem === 'Sign In'} onClick={this.handleItemClick} />
                        <Menu.Item name='Sign Up' active={activeItem === 'Sign Up'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                </Menu>
           </Menu>
            
            <ImageSizeHeader src='https://www.hdwallpapers.in/walls/planets_in_space_minimal-wide.jpg' />
            </div>
            
        )
    }
}