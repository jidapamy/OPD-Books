import React from 'react'
import { Container, Header, Button, Segment, Image, Form, Grid, Dimmer, Loader, Icon } from 'semantic-ui-react'
import ReactCountdownClock from 'react-countdown-clock'
import onetimepass from './../../Static/Img/2fa.svg'
import { color } from './../../Static/Data/ColorPattern'
import { style } from "./../../Static/Style/QueueCss";

export default class OTPfactor extends React.Component {
    state = {
        value: "",
        loader: false,
        pin1: '',
        pin2: '',
        pin3: '',
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
    }

    componentWillReceiveProps = (nextProps) => {
        if(!nextProps.pin){
            this.setState({
                pin1: '',
                pin2: '',
                pin3: '',
                pin4: ''
            })
            this.refs[1].focus();
        }
    }

    render() {
        return (
            <Dimmer.Dimmable blurring dimmed={this.props.loader}>
            <Segment >
                <div style={{ textAlign: 'right', fontSize: '18px', color: '#d33', cursor: 'pointer' }}
                    onClick={() => this.props.cancelRequestOTP(this.props.requestId)}
                ><Icon name="close" /></div>
                {/* <br /> */}
                <Image centered src={onetimepass} style={{ hieght: 150, width: 150 }} />
                <Header as='h3' icon textAlign='center'>

                    Confirm OTP Password
                            <Header.Subheader>
                        The system has sent OTP Password to your mobile phone : <span style={{ fontWeight: '900', color: 'rgb(50, 135, 150)' }}> {this.props.mobileNumber} </span> <br />
                        Reference Code : <span style={{ color: '#72989e' }}>{this.props.requestId}</span>
                    </Header.Subheader>
                    {/* <Header.Subheader>
                            The system has sent OTP Password to your mobile phone : 08******87 <br />
                            Reference Code : d522fc01d2c543fba1ce761852ebe2f9
                        </Header.Subheader> */}
                </Header>
                <br /> <br />
                <Container style={{ width: '50%' }}>
                <Form name="telephone">
                        <Grid textAlign='center'>
                        <Form.Group widths="equal">
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
                        </Grid>
                        <br />
                        <p style={{ textDecoration: 'underline', textAlign: 'center',color: color.teal, cursor: 'pointer' }} onClick={() => this.props.requestOTP(this.props.citizenIdSearch, this.props.requestId)}>Request for OTP Password again </p>
                </Form>
                </Container>
                <br />
            </Segment>
            </Dimmer.Dimmable>
        )

    }
}

