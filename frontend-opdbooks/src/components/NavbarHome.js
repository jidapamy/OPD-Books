import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './../static/style/Navbar.css'


export default class Navbar extends Component {

    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

        const { activeItem } = this.state

        return (
            <div>

                <Menu pointing secondary color={'teal'} size='medium'>
                    <Link to='/'><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
                    <Menu.Menu position='right'>
                        <Link to='/'><Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} /></Link>
                        <Menu.Item>
                            <Button color='teal' basic floated='left' onClick={this.props.show('mini')}><Icon name='qrcode' />{this.props.role === 'emp' ? 'Scan QRCode': 'Show QRCode' }</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

            </div>
        )
    }
}