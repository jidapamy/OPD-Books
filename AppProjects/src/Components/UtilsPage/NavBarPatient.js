import React, { Component } from "react";
import { Visibility, Menu, Header, Button, Image, Dimmer, Loader, Dropdown, Icon, Responsive } from "semantic-ui-react";
import LogoWebpage from "../../Static/Img/logoWebpage.svg";
import BGLogoLogin from '../../Static/Img/LogoLogin.svg'

import { UserProvider } from "../../Services/UserProvider"
const fixedMenuStyle = {
    backgroundColor: "transparent",
    border: "1px solid #ddd",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
};

const menuStyle = {
    border: "none",
    borderRadius: 0,
    boxShadow: "none",
    marginBottom: "1em",
    marginTop: "4em",
    transition: "box-shadow 0.5s ease, padding 0.5s ease",
    backgroundColor: "transparent"
};

export default class NavBarPatient extends Component {
    state = {
        menuFixed: false,
    }

    stickTopMenu = () => {
        // เลื่อนลง onBottomPassed
        this.setState({ menuFixed: true });
    }
    unStickTopMenu = () => {
        // เลื่อนชิดบน onBottomVisible
        this.setState({ menuFixed: false });
    }

    logout = () => {
        UserProvider.setUserLogin(undefined)
        this.props.goToPage('/')
    }

    userStatus = (menuFixed) => {
        if (UserProvider.getUserLogin()) {
            if (this.props.propsHistory.location.pathname !== "/profile") {
                return <span style={{ display: 'flex' }}>
                    <Menu.Item>
                        <Button
                            color={!menuFixed ? '' : ''}
                            inverted={!menuFixed}
                            onClick={() => this.props.goToPage('/profile')}>
                            <Icon name='user' />&nbsp;&nbsp;{UserProvider.getUserLogin().firstname + ' ' + UserProvider.getUserLogin().lastname}
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button onClick={() => this.logout()} color='google plus'>Sign out &nbsp;&nbsp; <Icon name='sign-out' /></Button>
                    </Menu.Item>
                </span>
            }
            return <span style={{ display: 'flex' }}><Dropdown item text={UserProvider.getUserLogin().firstname + ' ' + UserProvider.getUserLogin().lastname} >
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => this.props.setField('showEditPage', true)} > <Icon name='setting' /> &nbsp;&nbsp; Edit Profile</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                <Menu.Item>
                    <Button onClick={() => this.logout()} color='google plus'>Sign out &nbsp;&nbsp; <Icon name='sign-out' /></Button>
                </Menu.Item>
            </span>
        }
        return <span style={{ display: 'flex' }}>
            <Menu.Item>
                <Header
                    style={{ cursor: 'pointer' }}
                    inverted={!menuFixed}
                    onClick={() => this.props.goToPage('/apiDocument')}>
                    API Document
                                </Header>
            </Menu.Item>
            <Menu.Item>
                <Button
                    color={!menuFixed ? '' : ''}
                    inverted={!menuFixed}
                    onClick={() => this.props.goToPage('/signin')}>
                    Sign In
                                </Button>
            </Menu.Item>
            <Menu.Item>
                <Button
                    style={{ backgroundColor: !menuFixed ? '' : '#31A5BA', color: !menuFixed ? '' : '#FFF' }}
                    inverted={!menuFixed}
                    onClick={() => this.props.goToPage('/signup')}>
                    Sign Up
                                </Button>
            </Menu.Item>
        </span>
    }

    userStatusOnMobile = (menuFixed) => {
        if (UserProvider.getUserLogin()) {
            // if (this.props.propsHistory.location.pathname == "/") {
                return <span style={{ display: 'flex' }}>
                    <Dropdown item text={UserProvider.getUserLogin().firstname + ' ' + UserProvider.getUserLogin().lastname} >
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => this.props.goToPage('/profile')} > 
                                <Icon name='user' /> &nbsp;&nbsp; View Profile
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => this.logout()} >
                                <Icon name='sign-out' /> &nbsp;&nbsp; Sign out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
            // }
        }
        return <span style={{ display: 'flex' }}>
            <Menu.Item>
                <Button
                    // color={!menuFixed ? '' : ''}
                    // inverted={!menuFixed}
                    onClick={() => this.props.goToPage('/signin')}>
                    Sign In
                                </Button>
            </Menu.Item>
            <Menu.Item>
                <Button
                    style={{ backgroundColor: '#31A5BA', color: '#FFF' }}
                    // inverted={!menuFixed}
                    onClick={() => this.props.goToPage('/signup')}>
                    Sign Up
                                </Button>
            </Menu.Item>
        </span>
    }

    render() {
        let menuFixed = this.props.menuFixed
        let loader = this.props.loader
        return (
            <div>
                <Responsive {...Responsive.onlyComputer} minWidth={Responsive.onlyTablet.minWidth}> 
                    <Dimmer.Dimmable blurring dimmed={loader}>
                    <Menu
                        size='large'
                        pointing={true}
                        secondary={!menuFixed}
                        borderless={true}
                        fixed='top'
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                        style={{ border: "0px" }}
                    >
                        <Menu.Item onClick={() => this.props.goToPage('/')}>
                            <Image size='small' src={BGLogoLogin} />
                        </Menu.Item>
                        <Menu.Menu position="right">
                            {this.userStatus(menuFixed)}
                        </Menu.Menu>
                    </Menu>
                    </Dimmer.Dimmable>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Dimmer.Dimmable blurring dimmed={loader}>
                    <Menu
                        color='teal'
                        size="mini"
                        pointing={true}
                        borderless={true}
                        fixed={menuFixed && "top"}
                        style={{ border: "0px" }}
                    >
                        <Menu.Item onClick={() => this.props.goToPage('/')}>
                            <Image size='small' src={BGLogoLogin} />
                        </Menu.Item>

                        <Menu.Menu position="right">
                            {this.userStatusOnMobile(menuFixed)}
                            {/* <Menu.Item>
                                <Button color='teal' basic onClick={() => this.props.goToPage('/signin')}>
                                    Sign In
                                            </Button>
                            </Menu.Item>
                            <Menu.Item>
                                <Button color='teal' onClick={() => this.props.goToPage('/signup')}>
                                    Sign Up
                                </Button>
                            </Menu.Item> */}
                        </Menu.Menu>
                    </Menu>
                    </Dimmer.Dimmable>
                </Responsive>
                </div>




                    )
                }
}