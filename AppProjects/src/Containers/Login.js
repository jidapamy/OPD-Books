import React, { Component } from "react";
import { Button, Form, Grid, Header, Message, Segment,Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login } from "../Services/AuthenticationMethod";
import BGLogoLogin from '../Static/Img/LogoLogin.svg'
import { Wrapper } from  '../Static/Style/QueueCss'
import { UserProvider } from "../Services/UserProvider"
import { color } from './../Static/Data/ColorPattern' ;

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
        UserProvider.setUserLogin({ citizenId: this.state.citizenId })
        this.props.history.push({
          pathname: "/profile",
          // state: { citizenId: this.state.citizenId }
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
            <Link to="/"> <Image style={this.style.ImButton} verticalAlign='middle' src={BGLogoLogin} size='medium' /></Link>
                {/* <Header style={{ fontSize: "4em", color:'#31A5BA' }} textAlign="center">
                        OPD BOOKS
                      </Header> */}
                       
                      <Form size="large">
                        <Segment style={{ borderRadius: "1.5rem", padding: "5%" }}>
                          {this.state.checklogin && <p style={{ color: "#db2828" }}>{this.state.checklogin}</p>}
                          <Form.Input
                            className="setfeild"
                            style={{ width: "100%" }}
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="Citizen Id"
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
                        <Link style={{ color: color.teal}} to="/forgotPassword">
                          Forgot Password?{" "}
                        </Link>
                        New to us?{" "}
                        <Link style={{ color: color.teal }} to="/signup">
                          Sign Up
                        </Link>
                      </Message>
                    </Grid.Column>
                </Grid>
      </Wrapper>
    );
  }
}
