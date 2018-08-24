import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
// import './login.css'
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';
//static
import BackgroundImage from './../../Static/Img/BG.png'
import { defaultAccount, contract, web3 } from './../../Lib/Web3';
import styled from 'styled-components'

//css
const Wrapper = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
`

export default class PatientRecord extends Component {
    state={
        citizenId:'',
        password:'',
        checklogin:''
    }

    login = () => {
        console.log("forPatient ",this.state)
        console.log("ascii ", web3.fromAscii(this.state.citizenId));
        const result = contract.Login(web3.fromAscii(this.state.citizenId), web3.fromAscii(this.state.password))
        if (result){
            console.log(result)
            this.props.history.push({
                pathname: '/profile',
                state: { citizenId: web3.fromAscii(this.state.citizenId) }
            })
        }else{
            this.setState({ checklogin:'Sorry!! Incorrect citizenId or Password'});
        }
        // const result = contract.getInfoPatientPart1(web3.fromAscii(this.state.citizenId));
        //  if (result){
        //     console.log(web3.toAscii(result[0]) + "/ "+web3.toAscii(result[1]) + "/ " +web3.toAscii(result[2]) + "/ " + web3.toAscii(result[3]));
        //     const res = contract.Login(web3.fromAscii(this.state.citizenId), web3.fromAscii(this.state.password));
        //      if (res){
        //          console.log(res)
        //      }
        // }
    }

    render() {
        return <Wrapper className="login-form">
            <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                        height: 100%;
                    }
                `}</style>
            <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header style={{ fontSize: "5em" }} color="teal" textAlign="center">
                  OPD BOOKS
                </Header>
                <Form size="large">
                  <Segment style={{ borderRadius: "2rem", padding: "5%" }}>
                    <p style={{ color: "red" }}>
                      {this.state.checklogin}
                    </p>
                    <Form.Input class="setfeild" style={{ width: "100%" }} fluid icon="user" iconPosition="left" placeholder="citizenId" onChange={e => this.setState(
                          { citizenId: e.target.value }
                        )} onFocus={() => this.setState({
                          checklogin: ""
                        })} />
                    <Form.Input class="setfeild" style={{ width: "100%" }} fluid icon="lock" iconPosition="left" placeholder="Password" type="password" onChange={e => this.setState(
                          { password: e.target.value }
                        )} onFocus={() => this.setState({
                          checklogin: ""
                        })} />
                    <Button color="teal" fluid size="large" onClick={() => this.login()}>
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message style={{ borderRadius: "2rem" }}>
                  New to us? <Link to="/signup">
                    <a href="#">Sign Up</a>
                  </Link>
                </Message>
                {web3.toAscii("0x31323334353637383930313232")} <br />
                {web3.toAscii("0x5765646e65736461792c204175677573742032322c203230313820343a333420504d")} <br />
                {web3.toAscii("0x485032333132")} <br />
                {web3.toAscii("0x31323334353637382121")} <br />
              </Grid.Column>
            </Grid>
          </Wrapper>;
    }
}