import React from 'react'
import { Container, Header, Button, Segment, Image, Form, Grid, Dimmer, Loader } from 'semantic-ui-react'
import ReactCountdownClock from 'react-countdown-clock'
import onetimepass from './../../Static/Img/2fa.svg'
import { color } from './../../Static/Data/ColorPattern'

export default class OTPfactor extends React.Component {
    state = {
        value: "",
        loader: false,
        pin1:'',
        pin2: '',
        pin3:'',
        pin4: '',
    }
    
    onChange = (event) => {
        // let otp = this.state.pin + event.target.value
        // this.setState({ pin: otp })
        let otp = '';
        this.setState({ ['pin' + event.target.id]: event.target.value })
        if (event.target.value.length === event.target.maxLength) {
            if (event.target.id < 4) {
                this.refs[parseInt(event.target.id) + 1].focus();
            } else if (event.target.id == 4) {
                otp = this.state.pin1 + this.state.pin2 + this.state.pin3 + event.target.value
                this.props.validateOTP(otp)
            }
        }
        console.log(event.target.value,"otp "+otp)
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({ pin : ""})
        this.refs[1].focus();
    }

    render() {
        return (
            // <Dimmer.Dimmable blurring dimmed={this.state.loader}>
            //     <Dimmer page active={this.state.loader}>
            //         <Loader indeterminate size='massive'>Loading</Loader>
            //     </Dimmer>
               
                    <Segment >
                        <br />
                        <Image centered  src={onetimepass} style={{hieght:150,width:150}} />
                        <Header as='h3' icon textAlign='center'>
                            
                            Confirm OTP Password
                            <Header.Subheader>
                                The system has sent OTP Password to your mobile phone : {this.props.mobileNumber} <br /> 
                                Reference Code : {this.props.requestId}
                            </Header.Subheader>
                        {/* <Header.Subheader>
                            The system has sent OTP Password to your mobile phone : 08******87 <br />
                            Reference Code : d522fc01d2c543fba1ce761852ebe2f9
                        </Header.Subheader> */}
                        </Header>
                        <br /> <br />
                        <Grid textAlign='center'>
                            <Form name="telephone">
                                <Form.Group >
                                    <Grid.Column>
                                        <Form.Field style={{ paddingRight: 15 }}>
                                            <input
                                                width={2}
                                                style={{ width: 40 }}
                                                control='input'
                                                maxLength={1}
                                                id="1"
                                                ref="1"
                                                type="password"
                                                onChange={(e) => this.onChange(e)}
                                                autoFocus 
                                                value={this.state.pin1}
                                            />
                                        </Form.Field>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Field style={{ paddingRight: 15 }}>
                                            <input
                                                width={2}
                                                style={{ width: 40 }}
                                                control='input'
                                                maxLength={1}
                                                id="2"
                                                ref="2"
                                                type="password"
                                                onChange={(e) => this.onChange(e)}
                                                value={this.state.pin2}
                                            />
                                        </Form.Field>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Field style={{ paddingRight: 15 }}>
                                            <input
                                                width={2}
                                                style={{ width: 40 }}
                                                control='input'
                                                maxLength={1}
                                                id="3"
                                                ref="3"
                                                type="password"
                                                onChange={(e) => this.onChange(e)}
                                                value={this.state.pin3}
                                            />
                                        </Form.Field>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Field>
                                            <input
                                                width={2}
                                                style={{ width: 40 }}
                                                control='input'
                                                maxLength={1}
                                                id="4"
                                                ref="4"
                                                type="password"
                                                onChange={(e) => this.onChange(e)}
                                                value={this.state.pin4}
                                            />
                                        </Form.Field>
                                    </Grid.Column>
                                </Form.Group>
                            </Form>
                        </Grid>

                        <Grid textAlign='center'>
                    <Grid.Row >
                        <p  style={{ color: color.teal, cursor: 'pointer'}} onClick={() => this.props.requestOTP(this.props.citizenIdSearch,this.props.requestId)}>Request for OTP Password again </p>
                        </Grid.Row>
                        <Grid.Row >
                        <Button  color='google plus' onClick={() => this.props.cancelRequestOTP(this.props.requestId)}>Cancel </Button>
                        </Grid.Row>
                        </Grid>
                        <br />
                    </Segment>
                
                // </Dimmer.Dimmable>
        )

    }
}

