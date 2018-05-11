import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
// import './login.css'
import { Link } from 'react-router-dom';
import { defaultAccount, contract, web3 } from './../lib/web3';

export default class PatientRecord extends Component {
    state={
        citizenId:'',
        password:''
    }

    login = () => {
        console.log(this.state)
        const result = contract.getCheckLogin(this.state.citizenId,this.state.password)
        console.log(result)
        console.log(contract.getCheckLogin("1670433847213", "12321AS"))
        if(result){
            this.props.history.push({
                pathname: '/profile',
                state: { citizenId: this.state.citizenId }
            })
        }
    }

    render() {
        // console.log(this.state)
        
        return (
            <div className='login-form'>
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
                        <Header as='h2' color='teal' textAlign='center'></Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input class="setfeild" style={{ width: '90%' }}
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='บัตรประจำตัวประชาชน'
                                    onChange={e=>this.setState({citizenId: e.target.value})}
                                />
                                <Form.Input class="setfeild" style={{ width: '90%' }}
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='วัน/เดือน/ปีเกิด (16072540)'
                                    type='password'
                                    onChange={e=> this.setState({ password: e.target.value })}
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
                        <Message>
                            New to us?  <Link to='/signup'><a href='#'>Sign Up</a></Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}