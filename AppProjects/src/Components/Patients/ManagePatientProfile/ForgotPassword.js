import React, { Component } from "react";
import {
    Input,
    Container,
    Icon,
    Button,
    Segment,
    Grid,
    Responsive,
    List,
    Form,
    Message,
    Header,
    Image,


} from "semantic-ui-react";
import { style } from "../../../Static/Style/QueueCss";
import BackgroundImage from "../../../Static/Img/BGForgot.png";
import styled from "styled-components";
import ForgotPasswordOnMobile from "./ForgotPasswordOnMobile";
import DatePicker from 'react-datepicker';
import onetimepass from '../../../Static/Img/2fa.svg'

const Wrapper = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
`;

const DateBirthday = styled(DatePicker)`
    padding-left: 3rem !important;
    width: 32rem !important;
    margin-left: -3.5% !important; 
`

const styles = {
    icon: {
        fontSize: "17px",
        padding: "9px 5px",
        position: "absolute",
        color: '#868686',
        display: 'flex',
    },

};



export default class ForgotPassword extends Component {
    goToPage = (path) => {
        this.props.history.push({
            pathname: path,
        });
    }

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
        this.setState({ pin: "" })
        this.refs[1].focus();
    }



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





                <Container style={style.Container}>
                    <p style={style.ForgotTopic}>FORGOT PASSWORD</p>

                    <Segment style={style.DecoSegment}>


                        {/* <Grid style={style.circularZone}> */}

                        {/*----------------- fill in the field ---------------------*/}
                        {/* <Grid>
                            <Grid.Row style={style.circularZone}>
                                <Grid.Column>

                                </Grid.Column>
                            </Grid.Row>


                            <Grid.Row >
                                <Grid.Column style={style.inputForgotZone}>
                                    <Message style={style.bgDescription}>
                                        <Message.List>
                                            <Message.Item>Please, fill in the field , then click 'Send To Verify' button.</Message.Item>
                                            <Message.Item>Waiting for <u>OTP</u> authentication from your mobile phone.&nbsp;
                                            <Icon name='phone' /></Message.Item>
                                        </Message.List>
                                    </Message>

                                </Grid.Column>
                            </Grid.Row>
                            <Container>
                                <Grid.Row style={style.inputForgotZone}>
                                    <Grid.Column>
                                        <Form style={{ paddingLeft: '15.5%' }}>
                                            <Form.Group>
                                                <Input icon='user' iconPosition='left' placeholder='Citizen ID ...' style={style.inputForgot} /><br />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Field style={{ display: 'flex' }}>
                                                    <DateBirthday placeholderText="Date of your Birthday ..." />
                                                    <Icon name="birthday" style={styles.icon} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Group>

                                            </Form.Group>

                                            <Form.Group style={style.twoColumnButton}>
                                                <Button style={style.ButtonCancel}><Icon name='arrow circle left' />&nbsp;&nbsp;Cancel</Button>
                                                <Button style={style.ButtonNext}>Send To Verify&nbsp;&nbsp;<Icon name='arrow circle right' /></Button>
                                            </Form.Group>

                                        </Form>
                                        <br />
                                    </Grid.Column>
                                </Grid.Row>
                            </Container>
                        </Grid> */}


                        {/*----------------- ตั้ง Password ใหม่ ---------------------*/}

                        {/* <Grid>
                            <Grid.Row style={style.circularZone}>
                                <Grid.Column>
                                    
                                </Grid.Column>
                            </Grid.Row>

                            

                            <Grid.Row >
                                <Grid.Column style={style.inputForgotZone}>
                                    <Message style={style.bgDescription}>
                                        <Message.Header><i>STEP 2 :</i></Message.Header>
                                        <Message.List>
                                            <Message.Item>Enter new password and confirm new password.&nbsp;
                                            <Icon name='key' />
                                            </Message.Item>
                                        </Message.List>
                                    </Message>

                                </Grid.Column>
                            </Grid.Row>
                            <Container>
                                <Grid.Row style={style.inputForgotZone}>
                                    <Grid.Column>
                                        <Form style={{ paddingLeft: '15.5%' }}>
                                            <Form.Group>
                                                <Input icon='lock' iconPosition='left' placeholder='New Password ...' style={style.inputForgot} /><br />
                                            </Form.Group>
                                            <Form.Group>
                                                <Input icon='lock' iconPosition='left' placeholder='Confirm New Password ...' style={style.inputForgot} /><br />
                                            </Form.Group>
                                            <Form.Group>

                                            </Form.Group>

                                            <Form.Group style={style.twoColumnButton}>
                                                <Button style={style.ButtonCancel}><Icon name='arrow circle left' />&nbsp;&nbsp;Cancel</Button>
                                                <Button style={style.ButtonNext}>Submit&nbsp;&nbsp;<Icon name='arrow circle right' /></Button>
                                            </Form.Group>

                                        </Form>
                                        <br />
                                    </Grid.Column>
                                </Grid.Row>
                            </Container>
                        </Grid> */}


                        {/*----------------- OTP ---------------------*/}

                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <br/><br/>
                                    <Header as='h3' icon textAlign='center'>
                                        <Image centered src={onetimepass} size='massive' />
                                        <br /><br />
                                        Confirm OTP Password
                            <Header.Subheader>
                                            The system has sent OTP Password to your mobile phone : {this.props.mobileNumber} <br /><br />
                                            Reference Code : {this.props.requestId}
                                        </Header.Subheader>
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

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
                            <Grid.Row ><br />
                                <a onClick={() => this.props.requestOTP(this.props.requestId)}>Request for OTP Password again </a>
                        </Grid.Row>
                        <Grid.Row >
                                <a onClick={() => this.props.cancelRequestOTP(this.props.requestId)}>Cancel </a>
                        </Grid.Row>
                        </Grid>

                    </Segment>
                </Container>




                {/*<Responsive {...Responsive.onlyMobile}>
                    <ForgotPasswordOnmobile
                        goToPage={this.goToPage}
                    />
                </Responsive>




                <Responsive {...Responsive.onlyMobile}>




                    <Container style={style.Container}>
                        <Segment>

                        </Segment>
                    </Container>

                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <ForgotPasswordOnmobile
                        goToPage={this.goToPage}
                    />
                </Responsive>*/}
            </Wrapper>
        )
    }
}
