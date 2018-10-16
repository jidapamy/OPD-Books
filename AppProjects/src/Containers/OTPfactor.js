import React from 'react'
import { Container, Header, Button, Segment, Image, Form, Grid, Dimmer, Loader } from 'semantic-ui-react'
import ReactCountdownClock from 'react-countdown-clock'
import onetimepass from './../Static/Img/2fa.svg'

export default class OTPfactor extends React.Component {
    state = {
        otpValue: "",
        value: "",
        loader: false
    }

    onChange = (event) => {
        this.setState({ otpValue: this.state.otpValue + event.target.value })
        if (event.target.value.length === event.target.maxLength) {
            if (event.target.id < 4) {
                this.refs[parseInt(event.target.id) + 1].focus();
            } else if (event.target.id == 4) {
                this.setState({ loader: true })
                setTimeout(() => {
                    this.setState({ loader: false })
                }, 1500);
            }
        }
    }

    render() {
        console.log(this.state)
        return (
            <Dimmer.Dimmable blurring dimmed={this.state.loader}>
                <Dimmer page active={this.state.loader}>
                    <Loader indeterminate size='massive'>Loading</Loader>
                </Dimmer>
                <Container >
                    <br /><br />
                    <br /><br />
                    <Segment >
                        <br />
                        <Header as='h3' icon textAlign='center'>
                            <Image centered src={onetimepass} size='massive' />
                            <br /><br />
                            Please Enter OTP
                <Header.Subheader>We have sent you one time password to your mobile</Header.Subheader>
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
                                                autoFocus />
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
                                            />
                                        </Form.Field>
                                    </Grid.Column>
                                </Form.Group>
                            </Form>
                        </Grid>

                        <Grid textAlign='center'>
                            <Grid.Column >
                                <p>Don't receiveOTP? <a>Resend OTP</a></p>
                            </Grid.Column>

                        </Grid>



                        <br />
                    </Segment>
                </Container>
                </Dimmer.Dimmable>
        )

    }
}

