import React from 'react'
import { Container, Header, Button, Segment, Image, Form, Grid, Dimmer, Loader } from 'semantic-ui-react'
import ReactCountdownClock from 'react-countdown-clock'
import onetimepass from './../../Static/Img/2fa.svg'

export default class OTPfactor extends React.Component {
    state = {
        pin: "",
        value: "",
        loader: false
    }

    onChange = (event) => {
        let otp = this.state.pin + event.target.value
        this.setState({ pin: otp })
        if (event.target.value.length === event.target.maxLength) {
            if (event.target.id < 4) {
                this.refs[parseInt(event.target.id) + 1].focus();
            } else if (event.target.id == 4) {
                this.props.validateOTP(otp)
            }
        }
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
                <Container >
                    <br /><br />
                    <br /><br />
                    <Segment >
                        <br />
                        <Header as='h3' icon textAlign='center'>
                            <Image centered src={onetimepass} size='massive' />
                            <br /><br />
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
                        <Grid textAlign='center' width>
                            <Form name="telephone">
                                <Form.Group >
                                    <Grid.Column>
                                        <Form.Field style={{ paddingRight: 15 }}>
                                            <input class="otp"
                                                width={2}
                                                style={{ width: 40 }}
                                                control='input'
                                                maxlength={1}
                                                id="1"
                                                ref="1"
                                                type="text"
                                                onChange={(e) => this.onChange(e)}
                                                autoFocus 
                                                value={this.state.pin.charAt(0)}
                                            />
                                        </Form.Field>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Field style={{ paddingRight: 15 }}>
                                            <input class="otp"
                                                width={2}
                                                style={{ width: 40 }}
                                                control='input'
                                                maxlength={1}
                                                id="2"
                                                ref="2"
                                                type="text"
                                                onChange={(e) => this.onChange(e)}
                                                value={this.state.pin.charAt(1)}
                                            />
                                        </Form.Field>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Field style={{ paddingRight: 15 }}>
                                            <input class="otp"
                                                width={2}
                                                style={{ width: 40 }}
                                                control='input'
                                                maxlength={1}
                                                id="3"
                                                ref="3"
                                                type="text"
                                                onChange={(e) => this.onChange(e)}
                                                value={this.state.pin.charAt(2)}
                                            />
                                        </Form.Field>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Field>
                                            <input class="otp"
                                                width={2}
                                                style={{ width: 40 }}
                                                control='input'
                                                maxlength={1}
                                                id="4"
                                                ref="4"
                                                type="text"
                                                onChange={(e) => this.onChange(e)}
                                                value={this.state.pin.charAt(3)}
                                            />
                                        </Form.Field>
                                    </Grid.Column>
                                </Form.Group>
                            </Form>
                        </Grid>

                        <Grid textAlign='center'>
                            <Grid.Row >
                                <a onClick={() => this.props.requestOTP(this.props.requestId)}>Request for OTP Password again </a>
                        </Grid.Row>
                        <Grid.Row >
                                <a onClick={() => this.props.cancelRequestOTP(this.props.requestId)}>Cancel </a>
                        </Grid.Row>
                        </Grid>
                        <br />
                    </Segment>
                </Container>
                // </Dimmer.Dimmable>
        )

    }
}

