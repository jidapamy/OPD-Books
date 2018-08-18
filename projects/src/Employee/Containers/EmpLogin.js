import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
// import './login.css'
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';
//static
import BackgroundImage from './../../Static/Img/BG.png'
import { defaultAccount, contract, web3 } from './../../Lib/Web3';
import styled from 'styled-components'
import { login } from "./../../Service/EmpReducer";

import { Employee } from "./../../Model/Employee";

//css
const Wrapper = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
`

export default class EmpLogin extends Component {
    state={
        empId:'',
        password:'',
        checklogin:''
    }

    login = () => { 
        console.log("forEmp ",this.state)
        let userLogin = Employee
        const res = contract.LoginEmployee(web3.fromAscii(this.state.empId), web3.fromAscii(this.state.password));
        
        if (res){
            console.log(res)
        //     userLogin.clinic = res.clinic;
        //     userLogin.empId = res.empId;
        //     userLogin.firstname = res.firstname;
        //     userLogin.lastname = res.lastname;
        //     userLogin.nameTitle = res.nameTitle;
        //     userLogin.position = res.position;
        //     this.props.history.push({
        //       pathname: "/profile",
        //       state: { userLogin: userLogin }
        //     });
        //     login(userLogin);
        }else{
        //     this.setState({ checklogin:'Sorry!! Incorrect EmpId or Password'});
        }
    }

    render() {
        return (
            <Wrapper className='login-form'>
                <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                        height: 100%;
                    }
                `}</style>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header style={{ fontSize: '5em' }} color='teal' textAlign='center'>
                            OPD BOOKS
                            <Header.Subheader style={{ fontSize: '20px' }} color='teal'>for Employee.</Header.Subheader>
                        </Header>
                        <Form size='large' >
                            <Segment  style={{ borderRadius: '2rem',padding:'5%' }}>
                                <p style={{ color: 'red' }}>{this.state.checklogin}</p>
                                <Form.Input class="setfeild" style={{ width: '100%' }}
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='EmpId'
                                    onChange={e=>this.setState({empId: e.target.value})}
                                    onFocus={()=>this.setState({ checklogin:''})}
                                />
                                <Form.Input class="setfeild" style={{ width: '100%' }}
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={e=> this.setState({ password: e.target.value })}
                                    onFocus={() => this.setState({ checklogin: '' })}
                                />
                                <Button 
                                    color='teal' 
                                    fluid size='large'
                                    onClick={() => this.login()}
                                >
                                Login
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Wrapper>
        )
    }
}