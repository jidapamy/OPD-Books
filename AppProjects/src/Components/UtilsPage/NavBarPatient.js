import React, { Component } from "react";
import { Visibility, Menu, Header, Button, Image, Dimmer, Loader, Dropdown, Icon } from "semantic-ui-react";
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
    state={
        menuFixed:false,
    }

    stickTopMenu = () => {
        // เลื่อนลง onBottomPassed
        console.log("onBottomPassed + เลื่อนลง true ")
        this.setState({ menuFixed: true });
    }
    unStickTopMenu = () => {
        // เลื่อนชิดบน onBottomVisible
        console.log("onBottomVisible + เลื่อนชิดบน false")
        this.setState({ menuFixed: false });
    }

    logout = () => {
        UserProvider.setUserLogin(undefined)
        this.props.goToPage('/')
    }

    userStatus = (menuFixed) => {
        if (UserProvider.getUserLogin()){
            if (this.props.propsHistory.location.pathname == "/"){
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

    render(){
        let menuFixed = this.props.menuFixed
        let loader = this.props.loader
        console.log("propsHistory",this.props.propsHistory)
        return (
            <Dimmer.Dimmable blurring dimmed={loader}>
                {/* <Dimmer page active={loader}>
                    <Loader indeterminate size='massive'>Loading</Loader>
                </Dimmer> */}

                {/* <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >  */}
                    <Menu
                        size='large'
                        pointing={true}
                        secondary={!menuFixed}
                        borderless={true}
                        fixed='top'
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                        style={{ border: "0px" }}
                    >
                        <Menu.Item  onClick={() => this.props.goToPage('/')}>
                        <Image size='small' src={BGLogoLogin} />
                        </Menu.Item>
                        <Menu.Menu position="right">
                        {this.userStatus(menuFixed)}
                            {/* <Dropdown item text={'Name Surname'} >
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => this.setState({ showEditPage : true })} ><Icon name='setting'></Icon>Edit Profile</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Menu.Item>
                                <Button onClick={() => this.goToPage('/')} color='google plus'>Logout</Button>
                            </Menu.Item> */}
                            {/* <Menu.Item>
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
                                    style={{ backgroundColor: !menuFixed ? '' : '#31A5BA' }}
                                    inverted={!menuFixed} 
                                    onClick={() => this.props.goToPage('/signup')}>
                                        Sign Up
                                </Button>
                            </Menu.Item> */}
                        </Menu.Menu>
                    </Menu>
                    {/* </Visibility> */}
            </Dimmer.Dimmable>
        )
    }
}