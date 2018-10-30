import React from "react";
import {
    Grid, Menu, Container, Icon, Image, Button, Responsive
} from "semantic-ui-react";
import styled from "styled-components";
import LogoWebpage from "./../../Static/Img/logoWebpage.svg";
import timeout from '../../Static/Img/Error/404-2.gif'
import { Link } from "react-router-dom";

export default class ErrorTimeOut extends React.Component {

    render() {
        return (
            <div>
                <Responsive {...Responsive.onlyComputer}>
                <Menu
                    size="large"
                    pointing={true}
                    borderless={true}
                    style={{ border: "0px" }}
                >
                    <Menu.Item>
                        <Image size='mini' src={LogoWebpage} />
                            <span style={{ fontSize: "2em", color: "#31A5BA", fontWeight: 900 }}>
                                OPD BOOKS
                            </span>
                    </Menu.Item>

                    <Menu.Menu position="right">
                        {/* <Menu.Item>
                            <Link to="/signin"><Button basic  color='teal'>
                                Sign In
                    </Button></Link>
                        </Menu.Item>

                        <Menu.Item>
                            <Link to="/signup"><Button   color='teal' >
                                Sign Up
                    </Button></Link>
                        </Menu.Item> */}
                    </Menu.Menu>
                </Menu>
                <Image src={timeout} fluid />
                <Container>
                    <Grid width={16}>
                        <Grid.Column width={2}>

                        </Grid.Column>
                        <Grid.Column width={2} >
                            <Container>
                                <Link to="/">
                                    <Button basic color='teal' size='massive' style={{ borderRadius: '2rem' }}>
                                        Homepage
                            </Button>
                                </Link>
                            </Container>
                        </Grid.Column>
                    </Grid>


                </Container>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Menu
                        size="mini"
                        pointing={true}
                        borderless={true}
                        style={{ border: "0px" }}
                    >
                        <Menu.Item>
                            <Image size='mini' src={LogoWebpage} />
                            <span style={{ fontSize: "1em", color: "#31A5BA", fontWeight: 900 }}>
                                OPD BOOKS
                        </span>
                        </Menu.Item>

                        <Menu.Menu position="right">
                            {/* <Menu.Item>
                            <Link to="/signin"><Button basic  color='teal'>
                                Sign In
                    </Button></Link>
                        </Menu.Item>

                        <Menu.Item>
                            <Link to="/signup"><Button   color='teal' >
                                Sign Up
                    </Button></Link>
                        </Menu.Item> */}
                        </Menu.Menu>
                    </Menu>
                    <Image src={timeout} fluid />
                    <Container>
                        <Grid width={16}>
                            <Grid.Column width={2}>

                            </Grid.Column>
                            <Grid.Column width={2} >
                                <Container>
                                    <Link to="/">
                                        <Button basic color='teal' size='massive' style={{ borderRadius: '1rem' }}>
                                            Homepage
                            </Button>
                                    </Link>
                                </Container>
                            </Grid.Column>
                        </Grid>


                    </Container>
                </Responsive>
            </div>
        );
    }
}
