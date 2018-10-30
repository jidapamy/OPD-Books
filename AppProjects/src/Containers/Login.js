import React, { Component } from "react";
import { Button, Form, Grid, Header, Message, Segment,Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login } from "../Services/AuthenticationMethod";
import BGLogoLogin from '../Static/Img/LogoLogin.svg'
import BGcomputer from '../Static/Img/Wallpaper/BGcomputer.png'
import BGIPad1 from '../Static/Img/Wallpaper/BGIPad1.png'
import BGIPad2 from '../Static/Img/Wallpaper/BGIPad2.png'
import BGIPad3 from '../Static/Img/Wallpaper/BGIPad3.png'
import BGIPhone from '../Static/Img/Wallpaper/BGIPhone.png'
import BGIPhonePlus from '../Static/Img/Wallpaper/BGIPhonePlus.png'
import BGIPhonX from '../Static/Img/Wallpaper/BGIPhonX.png'
const Wrapper = styled.div`

@media only screen and (max-width: 1366px) and (min-width: 1024px) {
  background: url(${BGIPad3}) no-repeat center fixed;
  background-size: 100% 100%;
}
@media only screen and (max-width: 1112px) and (min-width: 834px) {
  background: url(${BGIPad2}) no-repeat center fixed;
  background-size: 100% 100%;
}
@media only screen and (max-width: 1024px) and (min-width: 768px) {
  background: url(${BGIPad1}) no-repeat center fixed;
  background-size: 100% 100%;
}
@media only screen and (max-width: 812px) and (min-width: 315px) {
  background: url(${BGIPhonX}) no-repeat center fixed;
  background-size: 100% 100%;
}
@media only screen and (max-width: 736px) and (min-width: 414px) {
  background: url(${BGIPhonePlus}) no-repeat center fixed;
  background-size: 100% 100%;
}
@media only screen and (max-width: 667px) and (min-width: 375px) {
  background: url(${BGIPhone}) no-repeat center fixed;
  background-size: 100% 100%;
}
@media only screen and (min-width: 1025px)  {
  background: url(${BGcomputer}) no-repeat center fixed;
  background-size: 100% 100%;
}

`

export default class PatientRecord extends Component {
  state = {
    citizenId: "",
    password: "",
    checklogin: ""
  };

  login = () => {
    let data = {
      citizenId: this.state.citizenId, 
      password: this.state.password
    }
    login(data).then(res => {
      if (res.status) {
        this.props.history.push({
          pathname: "/profile",
          state: { citizenId: this.state.citizenId }
        });
      } else {
        this.setState({ checklogin: res.message });
      }
    })
  };
  style = {
    ImButton: {
      cursor: 'pointer'
    }
  }
  render() {
    return (
      <Wrapper className="login-form">
        <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                        height: 100%;
                    }
                `}</style>
                <Grid
                  textAlign="center"
                  style={{ height: "100%" }}
                  verticalAlign="middle"
                >
                  <Grid.Column style={{ maxWidth: 450 }}>
            <Link to="/"> <Image style={this.style.ImButton} verticalAlign='middle' src={BGLogoLogin} size='medium' /> </Link>
                {/* <Header style={{ fontSize: "4em", color:'#31A5BA' }} textAlign="center">
                        OPD BOOKS
                      </Header> */}
                       
                      <Form size="large">
                        <Segment style={{ borderRadius: "1.5rem", padding: "5%" }}>
                          <p style={{ color: "red" }}>{this.state.checklogin}</p>
                          <Form.Input
                            className="setfeild"
                            style={{ width: "100%" }}
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="citizenId"
                            onChange={e => this.setState({ citizenId: e.target.value })}
                            onFocus={() =>
                              this.setState({
                                checklogin: ""
                              })}
                          />
                          <Form.Input
                            className="setfeild"
                            style={{ width: "100%" }}
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                            onChange={e => this.setState({ password: e.target.value })}
                            onFocus={() =>
                              this.setState({
                                checklogin: ""
                              })}
                          />
                          <Button
                            style={{backgroundColor: '#31A5BA', color: '#FFF' }}
                            fluid
                            size="large"
                            onClick={() => this.login()}
                          >
                            Login
                          </Button>
                        </Segment>
                      </Form>
                      <Message style={{ borderRadius: "1.5rem" }}>
                      <Link to="/forgotPassword">
                          Forgot Passoword?{" "}
                        </Link>
                        New to us?{" "}
                        <Link to="/signup">
                          Sign Up
                        </Link>
                      </Message>
                    </Grid.Column>
                </Grid>
      </Wrapper>
    );
  }
}
