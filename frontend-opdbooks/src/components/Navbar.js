import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Menu fixed='top'>
                    <Menu pointing secondary attached='top' color='teal' size='huge' >
                        <Link to='/home'><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
                        <Menu.Menu position='right' >
                            <Link to='/login'><Menu.Item name='Sign In' active={activeItem === 'Sign In'} onClick={this.handleItemClick} /></Link>
                            <Link to='/register'><Menu.Item name='Sign Up' active={activeItem === 'Sign Up'} onClick={this.handleItemClick} /></Link>
                        </Menu.Menu>
                    </Menu>
                </Menu>
            </div>
        )
    }
}