import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import styled from "styled-components";

//static
import BackgroundImage from "./../../Static/Img/BG.png";

//service
import { login } from "./../../Service/AuthenticationMethod";
import { getEmployee } from "./../../Service/ManageEmployeeMethod";

//css
const Wrapper = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
`;

export default class EmpLogin extends Component {
  state = {
    empId: "",
    password: "",
    checklogin: ""
  };

  login = () => {
    console.log("forEmp ", this.state);
    let userLogin = {};
    const res = login(this.state.empId, this.state.password, "Emp");
    if (res) {
      // login success
      const empLogin = getEmployee(this.state.empId);
      let path = "";
      switch (empLogin.position) {
        case 1: // เวชระเบียน
          path = "/employeeSegment";
          break;
        case 2: // พยาบาล
          path = "/patientTreatment";
          break;
        case 3: // หมอ
          path = "/patientTreatment";
          break;
        case 4: // เภสัธ
          path = "/patientTreatment";
          break;
      }
      this.props.history.push({
        pathname: path,
        state: { userLogin: empLogin }
      });
    } else {
      this.setState({
        checklogin: "Sorry!! Incorrect EmpId or Password"
      });
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
              <Header.Subheader style={{ fontSize: "20px" }} color="teal">
                for Employee.
              </Header.Subheader>
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
                  placeholder="EmpId"
                  onChange={e => this.setState({ empId: e.target.value })}
                  onFocus={() => this.setState({ checklogin: "" })}
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
                  onFocus={() => this.setState({ checklogin: "" })}
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
          </Grid.Column>
        </Grid>
      </Wrapper>
    );
  }
}
