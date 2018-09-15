import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Label
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import BackgroundImage from "./../../Static/Img/BG.png";
import styled from "styled-components";
import { login } from "./../../Service/AuthenticationMethod";

const Wrapper = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
`;

export default class PatientRecord extends Component {
  state = {
    citizenId: "",
    password: "",
    checklogin: ""
  };

  login = () => {
    const res = login(this.state.citizenId, this.state.password, "Patient");
    if (res) {
      this.props.history.push({
        pathname: "/profile",
        state: { citizenId: res }
      });
    } else {
      this.setState({ checklogin: "Sorry!! Incorrect Citizen Id or Password" });
    }
  };

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
            <Header style={{ fontSize: "5em" }} color="teal" textAlign="center">
              OPD BOOKS
            </Header>
            <Form size="large">
              <Segment style={{ borderRadius: "2rem", padding: "5%" }}>
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
                  color="teal"
                  fluid
                  size="large"
                  onClick={() => this.login()}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message style={{ borderRadius: "2rem" }}>
              New to us?{" "}
              <Link to="/signup">
                <a>Sign Up</a>
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </Wrapper>
    );
  }
}
