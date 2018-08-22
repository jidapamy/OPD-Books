import React, { Component } from 'react';
import { Menu, Segment, Button, Dropdown} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import "./../../Static/Style/Navbar.css";
import styled from 'styled-components'

const MenuTran = styled(Menu) `
   
    background-color: transparent;
`
export default class Navbar extends Component {
    state = { activeItem: 'home' }
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        const { fixed } = this.state
        return (
            <div>
                <Menu size='big' borderless={true} secondary={true} style={{ border: '0px' ,backgroundColor: 'transparent'}}  >
                    <Menu.Item>
                        <img src='https://react.semantic-ui.com/logo.png' />
                    </Menu.Item>
                    

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button basic>Sign Up</Button>
                        </Menu.Item>

                        <Menu.Item>
                            
                            <Button basic>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                {/* <Menu fixed='top'>
                    <Menu pointing secondary attached='top' color='teal' size='huge' >
                        <Link to='/'><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
                        <Menu.Menu position='right' >
                            <Link to='/signin'><Menu.Item name='Sign In' active={activeItem === 'Sign In'} onClick={this.handleItemClick} /></Link>
                            <Link to='/signup'><Menu.Item name='Sign Up' active={activeItem === 'Sign Up'} onClick={this.handleItemClick} /></Link>
                        </Menu.Menu>
                    </Menu>
                </Menu> */}
            </div>
        )
    }
}