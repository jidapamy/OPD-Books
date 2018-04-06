import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './login.css'
import { Link } from 'react-router-dom';

const LoginForm_English = () => (
    <div className='login-form'>
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
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
                <Header as='h2' color='teal' textAlign='center'>
                    {/* <Image src='./favicon.ico' /> */}
                    {/* <Link to='/'>OPD Card<Link > */}
        </Header>
                <Form size='large'>
                    <Segment stacked>
                       
                        <Form.Input class="setfeild" style={{ width: '90%' }}
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='ID Card No.'
                        />
                        <Form.Input class="setfeild" style={{ width: '90%' }}
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='date of birth (16/07/2540)'
                            type='password'
                        />

                        <Button color='teal' fluid size='large'>Login</Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href='#'>Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    </div>
)

export default LoginForm_English 